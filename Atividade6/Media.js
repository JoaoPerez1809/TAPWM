function MediaNota(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nome = document.getElementById("nome").value;
    var media = (nota1 + nota2 + nota3 + nota4)/4 ;

    alert("Olá " + nome + " a média de suas notas é: "+ media + ".");
}