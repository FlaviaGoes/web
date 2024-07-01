import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";

export class GerenciaModalidades {
    ListaModal: ModalidadePaes[] = [];

    insereModal(modalidade:ModalidadePaes){
        this.ListaModal.push(modalidade);
    }

    filtraModalidades():ModalidadePaes[]{
        return this.ListaModal;
    }

    filtraModalID(id:any): ModalidadePaes | undefined{
        return this.ListaModal.find(ModalidadePaes => ModalidadePaes.id === id);
    }

    modificaModal(nome: any, vegano:any, modalidade:ModalidadePaes) : ModalidadePaes {
        const index = this.ListaModal.indexOf(modalidade);
        if(index !== -1){
            this.ListaModal[index].nome = nome;
            this.ListaModal[index].vegano = vegano;
        }
        return this.ListaModal[index];
    }

    excluirModal(modalidade:ModalidadePaes) {
        const index = this.ListaModal.indexOf(modalidade);
        if(index !== -1){
            this.ListaModal.splice(index, 1);
        }
        return index;
    }
}

export class GerenciaEstoque{
    listaEstoque: EstoquePaes[] = [];

    insereEstoque(estoque: EstoquePaes){
        this.listaEstoque.push(estoque);
    }

    TodoEstoque():EstoquePaes[]{
        return this.listaEstoque;
    }

    filtraEstoque(id:any): EstoquePaes | undefined{
        return this.listaEstoque.find(EstoquePaes => EstoquePaes.id === id);
    }

    AdicionarEstoque(estoque:EstoquePaes, quantidade:any, precoVenda:any) : EstoquePaes {
        const index = this.listaEstoque.indexOf(estoque);
        if(index !== -1){
            this.listaEstoque[index].quantidade += quantidade;
            this.listaEstoque[index].precoVenda = precoVenda;
        }
        return this.listaEstoque[index];
    }

    removerEstoque(estoque: EstoquePaes, quantidade:any, precoVenda:any) {
        const index = this.listaEstoque.indexOf(estoque);
        if(index !== -1){
            this.listaEstoque[index].quantidade -= quantidade;
            this.listaEstoque[index].precoVenda = precoVenda; 
        }
        return this.listaEstoque[index];
    }
}

export class GerenciaVendas{
    listaVendas: VendaPaes [] = [];

    registrarVenda(venda: VendaPaes){
        this.listaVendas.push(venda);
    }

    filtraVenda(id:any): VendaPaes | undefined{
        return this.listaVendas.find(VendaPaes => VendaPaes.id === id);
    }
}