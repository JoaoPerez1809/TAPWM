
function CalculoArray(){
        const numero1 = parseInt(document.getElementById("numero1").value);
        const numero2 = parseInt(document.getElementById("numero2").value);
        const numero3 = parseInt(document.getElementById("numero3").value);

    const arrayn = [numero1,numero2,numero3]

    function somarNumeros (a,b,c) {
        return a + b + c;
    }

    function quadradoNumeros(d){
        return d * d;
    }

    alert("A soma dos 3 números é: " + somarNumeros.apply(null, arrayn) + 
    "\nO quadrado do Primeiro número é: " + quadradoNumeros.apply(null, [numero1]) + 
    "\nO quadrado do Segundo número é: " + quadradoNumeros.apply(null, [numero2]))
}

function SubConjuntoArray(){
        const text1 = document.getElementById("text1").value;
        const text2 = document.getElementById("text2").value;

        function Subconjunto () {
            if (!text1 || !text2){
                return "Erro!!! Campos não definidos";
            }
            if (text1.includes(text2)){
                return "A segunda palavra é um subconjunto da primeira palavra!";
            }else{
                return "A segunda palavra não é um subconjunto da primeira palavra!";
            }

        }

        const SubconjuntoPalavra = Subconjunto(text1,text2);
        alert(SubconjuntoPalavra + "\n Primeira palavra: " + text1 + "\n Segunda Palavra: " + text2);
}