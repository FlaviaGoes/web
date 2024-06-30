import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";
import {GerenciaModalidades} from "../repository/PadariaRepo";

export class ServicePadoca {
    ModalidadePadoca: GerenciaModalidades = new GerenciaModalidades();
    
    cadastrarModalidade(modalData: any) : ModalidadePaes {
        const {nome, vegano} = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome);
        if(!nome || !vegano){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                throw new Error("Produto já cadastrado");
            }
        }

        const novaModalidade = new ModalidadePaes(nome, vegano);
        this.ModalidadePadoca.insereModal(novaModalidade);
        return novaModalidade;
    }

    mostrarModalidades(): ModalidadePaes[]{
        return this.ModalidadePadoca.filtraModalidades();
    }

    consultarModalidade(id : any): ModalidadePaes | undefined {
        if(!id){
            throw new Error("Necessário informar Modalidade ID");
        }
        return this.ModalidadePadoca.filtraModalID(id);
    }

    modificarModalidade(modalData: any) : ModalidadePaes | undefined {
        const {nome, vegano} = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome);
        if(!nome || !vegano){
            throw new Error("Informações incompletas");
        } else {
            if(existe){
                const novaModalidade = new ModalidadePaes(nome, vegano);
                this.ModalidadePadoca.modificaModal(novaModalidade);
                return novaModalidade;
            } else {
                throw new Error("Não existe a modalodade que deseja modificar.");
            }
        }
    }

    excluirModalidade(modalData:any){
        const {id, nome, vegano} = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome);
        if(!id || !nome || !vegano){
            throw new Error("Informações Incompletas");
        } else {
            if(existe) {
                return this.ModalidadePadoca.excluirModal(existe);
            } else {
                throw new Error("Modalidade não existente");
            }
        }
    }
}