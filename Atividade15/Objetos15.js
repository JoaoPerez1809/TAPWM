class ValorRetangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

function calcularRetangulo() {
    const base = parseInt(document.getElementById('base').value);
    const altura = parseInt(document.getElementById('altura').value);

    const retangulo = new ValorRetangulo(base, altura);

    alert('A área do retângulo é: ' + retangulo.calcularArea());
}

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getNomeCorrentista() {
        return this.nomeCorrentista;
    }

    setNomeCorrentista(nomeCorrentista) {
        this.nomeCorrentista = nomeCorrentista;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numeroConta) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros() {
        return this.juros;
    }

    setJuros(juros) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}

function mostrarDadosCorrente() {
    const nomeCorrentista = document.getElementById('nomeCorrentistaCorrente').value;
    const banco = document.getElementById('bancoCorrente').value;
    const numeroConta = document.getElementById('numeroContaCorrente').value;
    const saldo = parseFloat(document.getElementById('saldoCorrente').value);
    const saldoEspecial = parseFloat(document.getElementById('saldoEspecialCorrente').value || 0);

    const contaCorrente = new Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);

    alert("Nome do Correntista: " + contaCorrente.getNomeCorrentista() +
    "\n Banco: " + contaCorrente.getBanco() +
    "\n Número da Conta: " + contaCorrente.getNumeroConta() +
    "\n Saldo: R$ " + contaCorrente.getSaldo().toFixed(2) +
    "\n Saldo Especial: R$ " + contaCorrente.getSaldoEspecial().toFixed(2));
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
    "\n Banco: " + contaPoupanca.getBanco() +
    "\n Número da Conta: " + contaPoupanca.getNumeroConta() +
    "\n Saldo: R$ " + contaPoupanca.getSaldo().toFixed(2) +
    "\n Juros: " + contaPoupanca.getJuros() + "%" +
    "\n Data de Vencimento: " + contaPoupanca.getDataVencimento());
}