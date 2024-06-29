"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePadoca = void 0;
const Produtos_1 = require("../model/Produtos");
const PadariaRepo_1 = require("../repository/PadariaRepo");
class ServicePadoca {
    constructor() {
        this.ModalidadePadoca = new PadariaRepo_1.GerenciaModalidades();
    }
    cadastrarModalidade(modalData) {
        const { id, nome, vegano } = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome);
        if (!nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        else {
            if (existe) {
                throw new Error("Produto já cadastrado");
            }
        }
        const novaModalidade = new Produtos_1.ModalidadePaes(nome, vegano);
        this.ModalidadePadoca.insereModal(novaModalidade);
        return novaModalidade;
    }
}
exports.ServicePadoca = ServicePadoca;
