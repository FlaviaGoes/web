export class ModalidadePaes {
    id:number;
    nome:string;
    vegano:boolean;

    constructor(nome:string, vegano:boolean){
        this.id = this.gerarId();
        this.nome = nome;
        this.vegano = vegano;
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
        this.id = this.gerarId();
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }

    private gerarId():number{
        return Date.now();
    }

}

type ItemVenda = {
    estoquePaesID : number;
    quantidade : number;
    nome: string | undefined;
}

export class VendaPaes {
    id:number;
    cpfClient:string;
    valorTotal:number;
    itensComprados: ItemVenda[];

    constructor(cpfClient:string, valorTotal:number, itensComprados: ItemVenda[]){
        this.cpfClient = cpfClient;
        this.id = this.gerarId();
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }

    private gerarId():number{
        return Date.now();
    }

}