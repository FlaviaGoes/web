"use strict";
/*
Lista de Exercícios Funções

    Exercício 3

    Desenvolva uma classe Produto em TypeScript

*/
class Produto {
    constructor(nome, preco, QuantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.QuantidadeEstoque = QuantidadeEstoque;
    }
    get QuantidadeDoEstoque() {
        return `A quantidade do estoque é ${this.QuantidadeEstoque}`;
    }
    get calcularValorTotal() {
        return this.preco * this.QuantidadeEstoque;
    }
    set reporEstoque(quantidade) {
        this.QuantidadeEstoque += quantidade;
    }
    set vender(quantidade) {
        if (this.QuantidadeEstoque < quantidade)
            console.log("Não há produtos suficientes no estoque.");
        else
            this.QuantidadeEstoque -= quantidade;
    }
}
const Mouses = new Produto("Mouses", 10, 5);
console.log(Mouses.QuantidadeDoEstoque);
console.log(Mouses.calcularValorTotal);
Mouses.reporEstoque = 5;
Mouses.vender = 15;
console.log(Mouses.QuantidadeDoEstoque);
