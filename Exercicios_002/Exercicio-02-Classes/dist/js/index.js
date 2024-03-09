"use strict";
/*
Lista de Exercícios Classes

    Exercício 2

    Desenvolva uma classe Calculadora em TypeScript

*/
class Calculadora {
    constructor(PrimeiroValor, SegundoValor) {
        this.PrimeiroValor = PrimeiroValor;
        this.SegundoValor = SegundoValor;
    }
    get Soma() {
        return this.PrimeiroValor + this.SegundoValor;
    }
    get Multiplicacao() {
        return this.PrimeiroValor * this.SegundoValor;
    }
    get Divisao() {
        if (this.PrimeiroValor != 0 && this.SegundoValor != 0)
            return this.PrimeiroValor / this.SegundoValor;
    }
    get Subtracao() {
        return this.PrimeiroValor - this.SegundoValor;
    }
    get Porcentagem() {
        return (this.SegundoValor * 100) / this.PrimeiroValor;
    }
    set setNovoValor(Valor) {
        this.SegundoValor = Valor;
    }
}
const Numeros = new Calculadora(150, 25);
Numeros.setNovoValor = 10;
console.log(Numeros.Soma);
console.log(Numeros.Multiplicacao);
console.log(Numeros.Divisao);
console.log(Numeros.Porcentagem);
console.log(Numeros.Subtracao);
