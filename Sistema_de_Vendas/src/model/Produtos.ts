export class ModalidadePaes {
    id:number;
    nome:string;
    vegano:boolean;

    constructor(nome:string, vegano:boolean){
        this.nome = nome;
        this.vegano = vegano;
        this.id = this.gerarId();
    }

    private gerarId():number{
        return Date.now();
    }
}

export class EstoquePaes {
    id:number;
    modalidadeID:number;
    quantidade:number;
    precoVenda:number;

    constructor(modalidadeID:number, quantidade:number, precoVenda:number){
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.gerarId();
    }

    private gerarId():number{
        return Date.now();
    }

}

type ItemVenda = {
    estoquePaesID : number;
    quantidade : number;
}

export class VendaPaes {
    id:number;
    cpfClient:string;
    valorTotal:number;
    itensComprados: ItemVenda[];

    constructor(cpfClient:string, valorTotal:number, itensComprados: ItemVenda[]){
        this.cpfClient = cpfClient;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
        this.id = this.gerarId();
    }

    private gerarId():number{
        return Date.now();
    }
}