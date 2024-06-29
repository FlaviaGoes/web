import {ModalidadePaes, EstoquePaes, VendaPaes} from "../model/Produtos";
import {GerenciaModalidades} from "../repository/PadariaRepo";

export class ServicePadoca {
    ModalidadePadoca: GerenciaModalidades = new GerenciaModalidades();
    
    cadastrarModalidade(modalData: any) : ModalidadePaes {
        const {id, nome, vegano} = modalData;
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
}