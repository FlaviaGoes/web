"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciaModalidades = void 0;
class GerenciaModalidades {
    constructor() {
        this.ListaModal = [];
    }
    insereModal(modalidade) {
        this.ListaModal.push(modalidade);
    }
    filtraModalidades() {
        return this.ListaModal;
    }
    filtraModalID(id) {
        return this.ListaModal.find(ModalidadePaes => ModalidadePaes.id === id);
    }
    modificaModal(modalidade) {
        const index = this.ListaModal.indexOf(modalidade);
        if (index !== -1) {
            this.ListaModal[index] = modalidade;
        }
        return this.ListaModal[index];
    }
    excluirModal(modalidade) {
        const index = this.ListaModal.indexOf(modalidade);
        if (index !== -1) {
            this.ListaModal.splice(index, 1);
        }
    }
}
exports.GerenciaModalidades = GerenciaModalidades;
