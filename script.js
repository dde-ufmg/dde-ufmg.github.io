const showElement = (element) => {element.style.display = 'flex'};
const hideElement = (element) => {element.style.display = 'none'};

function loadDefinitions(definitionsDictionary) {
    const tips = document.getElementsByClassName('tipWrapper');
    const definitionsElement = document.getElementById("definitions");
    const definitionsToRender = {};
    
    for (let tip of tips) {
        const definitionKey = tip.dataset.key;
        const definitionText = definitionsDictionary[definitionKey];
        if (!definitionText) {
            continue;
        }

        const modalElement = document.getElementById("definitions");
        const definition = document.createElement('div');

        definition.style.display = 'none';
        definition.className = 'definition';
        definition.innerHTML = `<h3>${definitionKey}</h3><br><p>${definitionText}</p>`;
        definitionsToRender[definitionKey] = definition;

        tip.addEventListener("click", () => {
            showElement(definition);
            showElement(definitionsElement);
        })

        modalElement.addEventListener("click", () => {
            hideElement(definition);
            hideElement(definitionsElement);
        })
    }

    for (let key in definitionsToRender) {
        definitionsElement.appendChild(definitionsToRender[key]);
    }
}

fetch("./diagnostico/definitions.json")
    .then((res) => res.json())
    .then((definitionsDictionary) => {
        loadDefinitions(definitionsDictionary);
    })
    .catch((e) => console.error(e));
