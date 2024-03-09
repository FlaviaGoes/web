/*
Lista de Exercícios Classes

    Exercício 1

    Complete a classe Carro para que os atributos da mesma sejam acessados somente por métodos
    (Getters/ Setters) e tenha um método para calcular a idade do carro com base no ano atual. Crie uma
    instância de Carro


*/

class Carro {
    private CorCarro : string;
    private AnoCarro: number;
    private PortasQTD: number;
    private MarcaCarro: string;

    constructor(CorCarro : string, AnoCarro : number, PortasQTD : number, MarcaCarro : string){
        this.CorCarro = CorCarro;
        this.AnoCarro = AnoCarro;
        this.PortasQTD = PortasQTD;
        this.MarcaCarro = MarcaCarro;
    }

    get getshowCarro(): string {
        return `O nome do carro é ${this.MarcaCarro}`
    }

    get IdadeCarro() {
        let CarritoIdade
        let Ano = new Date().getFullYear()
        CarritoIdade = Ano - this.AnoCarro
        return CarritoIdade
    }

}

const carroBruna = new Carro("Preto", 1990, 2, "Chevrolet")
console.log(carroBruna.getshowCarro)
console.log(carroBruna.IdadeCarro)