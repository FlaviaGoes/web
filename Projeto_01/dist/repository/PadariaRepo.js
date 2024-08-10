"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciaVendas = exports.GerenciaEstoque = exports.GerenciaModalidades = void 0;
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
    modificaModal(nome, vegano, modalidade) {
        const index = this.ListaModal.indexOf(modalidade);
        if (index !== -1) {
            this.ListaModal[index].nome = nome;
            this.ListaModal[index].vegano = vegano;
        }
        return this.ListaModal[index];
    }
    excluirModal(modalidade) {
        const index = this.ListaModal.indexOf(modalidade);
        if (index !== -1) {
            this.ListaModal.splice(index, 1);
        }
        return index;
    }
}
exports.GerenciaModalidades = GerenciaModalidades;
class GerenciaEstoque {
    constructor() {
        this.listaEstoque = [];
    }
    insereEstoque(estoque) {
        this.listaEstoque.push(estoque);
    }
    TodoEstoque() {
        return this.listaEstoque;
    }
    filtraEstoque(id) {
        return this.listaEstoque.find(EstoquePaes => EstoquePaes.id === id);
    }
    AdicionarEstoque(estoque, quantidade, precoVenda) {
        const index = this.listaEstoque.indexOf(estoque);
        if (index !== -1) {
            this.listaEstoque[index].quantidade += quantidade;
            this.listaEstoque[index].precoVenda = precoVenda;
        }
        return this.listaEstoque[index];
    }
    removerEstoque(estoque, quantidade, precoVenda) {
        const index = this.listaEstoque.indexOf(estoque);
        if (index !== -1) {
            this.listaEstoque[index].quantidade -= quantidade;
            this.listaEstoque[index].precoVenda = precoVenda;
        }
        return this.listaEstoque[index];
    }
}
exports.GerenciaEstoque = GerenciaEstoque;
class GerenciaVendas {
    constructor() {
        this.listaVendas = [];
    }
    registrarVenda(venda) {
        this.listaVendas.push(venda);
    }
    filtraVenda(id) {
        return this.listaVendas.find(VendaPaes => VendaPaes.id === id);
    }
}
exports.GerenciaVendas = GerenciaVendas;
