function Sala1(){
var AlunoSala1 = new Object();
AlunoSala1.Sala = "Sala A"; 
AlunoSala1.Nome = "João "; 
AlunoSala1.RA = "0031432413012"; 

alert("Aluno: " + AlunoSala1.Nome + "\n RA: " + AlunoSala1.RA + "\n Sala: " + AlunoSala1.Sala);
}

function Sala2(){
var AlunoSala2 = {};
AlunoSala2.Sala = "Sala B";
AlunoSala2.Nome = "Rafael";
AlunoSala2.RA = "0034121932375";

alert("Aluno: " + AlunoSala2.Nome + "\n RA: " + AlunoSala2.RA + "\n Sala: " + AlunoSala2.Sala);

}

function Sala3(){
var AlunoSala3 ={
    Nome:"Pedro",
    RA: "0030121986375" ,
    Sala:"Sala C"
};
alert("Aluno: " + AlunoSala3.Nome + "\n RA: " + AlunoSala3.RA + "\n Sala: " + AlunoSala3.Sala);

}

function Aluno (ra, nome, sala) {
    this.ra = ra;
    this.nome = nome;
    this.sala = "Sala D";
    
    this.MostrarDados = function () {
        return "Aluno :" + this.nome + "\n RA: " + this.ra + "\n Sala: " + this.sala;
    };
}
function ExibirAluno(){
var aluno4 = new Aluno("123" , "Joel");
alert(aluno4.MostrarDados());
}