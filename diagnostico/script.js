let currentNode = {};

const historyStack = [];

function replaceImagesAndDefinitions(text, isFinalResult) {
    let formattedText = text.replace(/\$([a-zA-Z0-9-_]+)/g, (match, imgName) => {
        if (isFinalResult) {
            return `</h2><img src="./images/${imgName}.jpg" alt="${imgName}" class="dynamic-image"><p>`;
        }
        return `<img src="./images/${imgName}.jpg" alt="${imgName}" class="dynamic-image">`;
    });

    const urlGlobalRegex = /(https:\/\/[A-Za-z0-9\.\/\?\=\&\_]*)/g;
    const urlRegex = /[^"](https:\/\/[A-Za-z0-9\.\/\?\=\&\_]*)/;
    
    const urlCount = (str) => {
        return ((str || '').match(urlGlobalRegex) || []).length
    };
    
    for(let i=0; i<urlCount(formattedText); i++){
        console.log(formattedText);
        formattedText = formattedText.replace(urlRegex, (match, url) => (`<br><div class="reference-url"><a target="_blank" href="${url}">Link para o artigo ${i+1}</a></div>`)); 
    }


    return formattedText.replace(/\{\{([\sa-zA-ZÀ-ü]+)\}\}/g, (match, key) => (`<span class="tipWrapper" data-key="${key.trim()}">${key.trim()}</span>`))
}

function displayNode(node, definitionsDictionary) {
    const isFinalResult = node.edges.length === 0;

    // Substitui qualquer referência de imagem no texto
    const formattedText = replaceImagesAndDefinitions(node.text, isFinalResult)

    const backBtn = document.getElementById("backBtn");
    if (historyStack.length === 0){
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'flex';
    }
    historyStack.push(node);
    // console.log(historyStack);
    if (isFinalResult) {
        document.getElementById('content').innerHTML = `<h2>${formattedText}</p>`;
    } else {
        document.getElementById('content').innerHTML = `<h2>${formattedText}</h2>`;
    }
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    node.edges.sort((a,b) => {
        if(a.text < b.text) {
            return 1;
        } else {
            return -1;
        }
    });

    node.edges.forEach(edge => {
        const option = document.createElement('div');
        option.className = 'option';
        
        const formattedText = replaceImagesAndDefinitions(edge.text);
        option.innerHTML = `<p>${formattedText}</p>`;
        option.onclick = () => {
            displayNode(edge.to);
        }
        optionsDiv.appendChild(option);
    });
    
    const tips = document.getElementsByClassName('tipWrapper');
    const definitionsElement = document.getElementById("definitions");
    const showDefinitionsBtn = document.getElementById("showDefinitions");
    const definitionsToRender = {};
    
    for (let tip of tips) {
        const definitionKey = tip.dataset.key;
        const definitionText = definitionsDictionary[definitionKey];
        if (!definitionText) {
            continue;
        }

        const definition = document.createElement('div');
        definition.className = 'definition';
        definition.innerHTML = `<h3>${definitionKey}</h3><br><p>${definitionText}</p>`;
        definitionsToRender[definitionKey] = definition;
    }

    definitionsElement.innerHTML = ``;
    showDefinitionsBtn.style.display = 'none'
    
    for (let key in definitionsToRender) {
        definitionsElement.appendChild(definitionsToRender[key]);
    }

    const modalElement = document.getElementById("definitions");

    if (Object.keys(definitionsToRender).length > 0) {
        const toggleVisibility = () => {definitionsElement.style.display = definitionsElement.style.display === 'flex' ? 'none' : 'flex'};
        showDefinitionsBtn.style.display = 'block'

        showDefinitionsBtn.addEventListener("click",toggleVisibility)
        modalElement.addEventListener("click", toggleVisibility);
    }

}

function showTip(event, key) {
    console.log(`show ${key}`)
}

const backBtn = document.getElementById("backBtn");
// console.log(backBtn);
backBtn.onclick = () => {
    // console.log(historyStack.pop());
    console.log("b",historyStack);
    historyStack.pop(); // fix
    const node = historyStack.pop(); 
    console.log("after",historyStack);
    console.log("node",node);
    displayNode(node);
};

fetch("./flow.json")
  .then((res) => res.json())
  .then((graph) => {
        fetch("./definitions.json")
            .then((res) => res.json())
            .then((definitionsDictionary) => {
                displayNode(graph, definitionsDictionary);
            })
            .catch((e) => console.error(e));
   })
  .catch((e) => console.error(e));
