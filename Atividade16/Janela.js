function abrirJanela(obj) {
    obj.src = 'janelaAberta.png';
    document.querySelector('h1').textContent = 'Janela Aberta';
}

function fecharJanela(obj) {
    obj.src = 'janelaFechada.png';
    document.querySelector('h1').textContent = 'Janela Fechada';
}

function quebrarJanela(obj) {
    obj.src = 'janelaQuebrada.png';
    document.querySelector('h1').textContent = 'Janela Quebrada';
}
