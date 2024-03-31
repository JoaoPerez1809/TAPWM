function Operacoes() {
    var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var soma = num1 + num2;
        var subtrair = num1 - num2;
        var multiplicar = num1 * num2;
        var dividir = num1 / num2;
        var resto = num1 % num2;
        //Não entendi muito algumas questões, como o Produto e o Resto da divisão.
        alert("Soma dos números: " + soma +
              "\nSubtração do primeiro pelo segundo: " + subtrair +
              "\nProduto dos números: " + multiplicar +
              "\nDivisão do primeiro pelo segundo: " + dividir +
              "\nResto da divisão do primeiro pelo segundo: " + resto);
    }