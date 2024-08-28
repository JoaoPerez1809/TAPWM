function ValorRetangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function calcularRetangulo() {
    var base = parseInt(document.getElementById('base').value);
    var altura = parseInt(document.getElementById('altura').value);

    var retangulo = new ValorRetangulo(base, altura);

    alert('A area do retangulo é: ' + retangulo.calcularArea());
}



function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;

    this.getNomeCorrentista = function() {
        return this.nomeCorrentista;
    };

    this.setNomeCorrentista = function(nomeCorrentista) {
        this.nomeCorrentista = nomeCorrentista;
    };

    this.getBanco = function() {
        return this.banco;
    };

    this.setBanco = function(banco) {
        this.banco = banco;
    };

    this.getNumeroConta = function() {
        return this.numeroConta;
    };

    this.setNumeroConta = function(numeroConta) {
        this.numeroConta = numeroConta;
    };

    this.getSaldo = function() {
        return this.saldo;
    };

    this.setSaldo = function(saldo) {
        this.saldo = saldo;
    };
}


function Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.saldoEspecial = saldoEspecial;

    this.getSaldoEspecial = function() {
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    };
}


function Poupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;

    this.getJuros = function() {
        return this.juros;
    };

    this.setJuros = function(juros) {
        this.juros = juros;
    };

    this.getDataVencimento = function() {
        return this.dataVencimento;
    };

    this.setDataVencimento = function(dataVencimento) {
        this.dataVencimento = dataVencimento;
    };
}


function mostrarDadosCorrente() {
    const nomeCorrentista = document.getElementById('nomeCorrentistaCorrente').value;
    const banco = document.getElementById('bancoCorrente').value;
    const numeroConta = document.getElementById('numeroContaCorrente').value;
    const saldo = parseFloat(document.getElementById('saldoCorrente').value);
    const saldoEspecial = parseFloat(document.getElementById('saldoEspecialCorrente').value || 0);

    const contaCorrente = new Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);

    const detalhes = `
        Nome do Correntista: ${contaCorrente.getNomeCorrentista()}
        Banco: ${contaCorrente.getBanco()}
        Número da Conta: ${contaCorrente.getNumeroConta()}
        Saldo: R$ ${contaCorrente.getSaldo().toFixed(2)}
        Saldo Especial: R$ ${contaCorrente.getSaldoEspecial().toFixed(2)}
    `;
    alert("Nome do Correntista: " + contaCorrente.getNomeCorrentista() +
    "\n Banco: " + contaCorrente.getBanco() +
    "\n Número da Conta: " +contaCorrente.getNumeroConta()+
    "\n Saldo: R$ " + contaCorrente.getSaldo().toFixed(2) +
    "\n Saldo Especial: R$ " +contaCorrente.getSaldoEspecial().toFixed(2));
}


function mostrarDadosPoupanca() {
    const nomeCorrentista = document.getElementById('nomeCorrentistaPoupanca').value;
    const banco = document.getElementById('bancoPoupanca').value;
    const numeroConta = document.getElementById('numeroContaPoupanca').value;
    const saldo = parseFloat(document.getElementById('saldoPoupanca').value);
    const juros = parseFloat(document.getElementById('jurosPoupanca').value || 0);
    const dataVencimento = document.getElementById('dataVencimentoPoupanca').value;

    const contaPoupanca = new Poupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento);

    
    alert("Nome do Correntista: " + contaPoupanca.getNomeCorrentista() +
    "\n Banco: " +contaPoupanca.getBanco() +
    "\n Número da Conta: " +contaPoupanca.getNumeroConta() +
    "\n Saldo: R$ " + contaPoupanca.getSaldo().toFixed(2) +
    "\n Juros: " + contaPoupanca.getJuros() + "%" +
    "\n Data de Vencimento: " + contaPoupanca.getDataVencimento());
}