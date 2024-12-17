function addContact() {
    const ul = document.getElementById('contacts-list'); // Referência à lista de contatos
    const nameLi = document.createElement('li'); // Criação de um novo item de lista
    nameLi.innerText = "Nome: "; // Texto que aparece antes do campo de input
    
    const nameInput = document.createElement('input'); // Criação do campo de input
    nameInput.type = 'text'; // Tipo de input (campo de texto)
    nameInput.name = 'fullname'; // Nome do campo de input
    nameLi.appendChild(nameInput); // Adiciona o campo de input ao item da lista
    
    ul.appendChild(nameLi); // Adiciona o item à lista no HTML
}

function removeContact() {
    const ul = document.getElementById('contacts-list'); // Referência à lista de contatos
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild); // Remove o último item da lista
    }
}