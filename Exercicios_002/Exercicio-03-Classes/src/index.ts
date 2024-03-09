/*
Lista de Exercícios Funções

    Exercício 3

    Desenvolva uma classe Produto em TypeScript

*/

class Produto {
    private nome : string;
    private preco : number;
    private QuantidadeEstoque : number;

    constructor(nome:string, preco:number, QuantidadeEstoque:number){
        this.nome = nome;
        this.preco = preco;
        this.QuantidadeEstoque = QuantidadeEstoque;
    }

    get QuantidadeDoEstoque() {
        return `A quantidade do estoque é ${this.QuantidadeEstoque}`
    }

    get calcularValorTotal() : number {
        return this.preco * this.QuantidadeEstoque
    }

    set reporEstoque(quantidade:number){
        this.QuantidadeEstoque += quantidade
    }

    set vender(quantidade:number) {
        if(this.QuantidadeEstoque < quantidade)
            console.log("Não há produtos suficientes no estoque.")
        else
            this.QuantidadeEstoque -= quantidade
    }
}

const Mouses = new Produto("Mouses", 10, 5)
console.log(Mouses.QuantidadeDoEstoque)
console.log(Mouses.calcularValorTotal)
Mouses.reporEstoque = 5
Mouses.vender = 15
console.log(Mouses.QuantidadeDoEstoque)

