"use strict";
/*
Lista de Exercícios Classes

    Exercício 1

    Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
    (Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
    instância de Carro


*/
class Carro {
    constructor(CorCarro, AnoCarro, PortasQTD, MarcaCarro) {
        this.CorCarro = CorCarro;
        this.AnoCarro = AnoCarro;
        this.PortasQTD = PortasQTD;
        this.MarcaCarro = MarcaCarro;
    }
    get getshowCarro() {
        return `O nome do carro é ${this.MarcaCarro}`;
    }
    get IdadeCarro() {
        let CarritoIdade;
        let Ano = new Date().getFullYear();
        CarritoIdade = Ano - this.AnoCarro;
        return CarritoIdade;
    }
}
const carroBruna = new Carro("Preto", 1990, 2, "Chevrolet");
console.log(carroBruna.getshowCarro);
console.log(carroBruna.IdadeCarro);
