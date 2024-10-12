let currentNode = {};

const historyStack = [];

function displayNode(node) {
    // Substitui qualquer referência de imagem no texto
    const formattedText = node.text.replace(/\$([a-zA-Z0-9-_]+)/g, (match, imgName) => {
        return `<img src="/images/${imgName}.png" alt="${imgName}" class="dynamic-image">`;
    });

    historyStack.push(node);
    // console.log(historyStack);
    
    document.getElementById('content').innerHTML = `<h2>${formattedText}</h2>`;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    node.edges.forEach(edge => {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerText = edge.text;
        option.onclick = () => {
            displayNode(edge.to);
        }
        optionsDiv.appendChild(option);
    });
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
        displayNode(graph);
   })
  .catch((e) => console.error(e));
