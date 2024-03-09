/*
Lista de Exercícios Classes

    Exercício 2

    Desenvolva uma classe Calculadora em TypeScript 

*/

class Calculadora {
    private PrimeiroValor : number;
    private SegundoValor: number;

    constructor(PrimeiroValor:number, SegundoValor:number){
        this.PrimeiroValor = PrimeiroValor;
        this.SegundoValor = SegundoValor;
    }

    get Soma():number {
        return this.PrimeiroValor + this.SegundoValor
    }

    get Multiplicacao():number {
        return this.PrimeiroValor * this.SegundoValor
    }

    get Divisao():any {
        if(this.PrimeiroValor != 0 && this.SegundoValor != 0)
            return this.PrimeiroValor / this.SegundoValor
    }

    get Subtracao():number {
        return this.PrimeiroValor - this.SegundoValor
    }

    get Porcentagem():number {
        return (this.SegundoValor * 100)/this.PrimeiroValor
    }

    set setNovoValor(Valor : number){
        this.SegundoValor = Valor;
    }
}

const Numeros = new Calculadora(150, 25);
Numeros.setNovoValor = 10
console.log(Numeros.Soma)
console.log(Numeros.Multiplicacao)
console.log(Numeros.Divisao)
console.log(Numeros.Porcentagem)
console.log(Numeros.Subtracao)



