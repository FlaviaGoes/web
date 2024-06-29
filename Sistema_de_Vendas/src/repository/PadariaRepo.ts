import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";

export class GerenciaModalidades {
    ListaModal: ModalidadePaes[] = [];

    insereModal(modalidade:ModalidadePaes){
        this.ListaModal.push(modalidade);
    }

    filtraModalidades():ModalidadePaes[]{
        return this.ListaModal;
    }

    filtraModalID(id:number):ModalidadePaes | undefined{
        return this.ListaModal.find(ModalidadePaes => ModalidadePaes.id === id);
    }

    modificaModal(modalidade: ModalidadePaes) : ModalidadePaes {
        this.ListaModal[modalidade.id].nome = modalidade.nome;
        this.ListaModal[modalidade.id].vegano = modalidade.vegano;
        return this.ListaModal[modalidade.id];
    }

    excluirModal(modalidade:ModalidadePaes) {
        const index = this.ListaModal.indexOf(modalidade);
        if(index !== -1){
            this.ListaModal.splice(index, 1);
        }
    }
}