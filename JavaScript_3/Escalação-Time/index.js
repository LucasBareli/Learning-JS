function addJogador() {
    const ul = document.getElementById('jogadores');
    const jogadorLi = document.createElement('li');
    const posicaoLi = document.createElement('li');
    const numeroLi = document.createElement('li');
    jogadorLi.innerText = "Jogador: ";
    posicaoLi.innerText = "Posição: ";
    numeroLi.innerText = "Numero: ";

    const jogadorInput = document.createElement('input');
    jogadorInput.type = 'text';
    jogadorInput.name = 'jogador';
    jogadorLi.appendChild(jogadorInput);

    ul.appendChild(jogadorLi);

    const posicaoInput = document.createElement('input');
    posicaoInput.type = 'text';
    posicaoInput.name = 'posição';
    posicaoLi.appendChild(posicaoInput);

    ul.appendChild(posicaoLi);

    const numeroInput = document.createElement('input');
    numeroInput.type = 'text';
    numeroInput.name = 'numero';
    numeroLi.appendChild(numeroInput);

    ul.appendChild(numeroLi);
}