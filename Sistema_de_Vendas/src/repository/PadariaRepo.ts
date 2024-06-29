import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";

export class GerenciaModalidades {
    ListaModal: ModalidadePaes[] = [];

    insereModal(modalidade:ModalidadePaes){
        this.ListaModal.push(modalidade);
    }

    filtraModalidades():ModalidadePaes[]{
        return this.ListaModal;
    }

    filtraModalID(id:number): ModalidadePaes | undefined{
        return this.ListaModal.find(ModalidadePaes => ModalidadePaes.id === id);
    }

    modificaModal(modalidade: ModalidadePaes) : ModalidadePaes {
        const index = this.ListaModal.indexOf(modalidade);
        if(index !== -1){
            this.ListaModal[index] = modalidade;
        }
        return this.ListaModal[index];
    }

    excluirModal(modalidade:ModalidadePaes) {
        const index = this.ListaModal.indexOf(modalidade);
        if(index !== -1){
            this.ListaModal.splice(index, 1);
        }
    }
}