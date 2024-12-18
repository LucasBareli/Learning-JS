function addJogador() {
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (!position || !name || !number) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    const confirmation = confirm("Escalar " + name + " como " + position + "?");

    if (confirmation) {
        const jogadores = document.getElementById('jogadores');
        const playerItem = document.createElement('li');
        playerItem.id = 'jogador-' + number;
        playerItem.innerText = position + ": " + name + " (" + number + ")";
        jogadores.appendChild(playerItem);
        
        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}

function removeJogador() {
    const number = document.getElementById('numberToRemove').value;
    if (!number) {
        alert("Por favor, forneça o número do jogador a ser removido.");
        return;
    }

    const playerToRemove = document.getElementById('jogador-' + number);

    if (!playerToRemove) {
        alert("Jogador não encontrado.");
        return;
    }

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");
    if (confirmation) {
        document.getElementById('jogadores').removeChild(playerToRemove);
        document.getElementById('numberToRemove').value = '';
    }
}
