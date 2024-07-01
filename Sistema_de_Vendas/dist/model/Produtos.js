"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = exports.EstoquePaes = exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(nome, vegano) {
        this.id = this.gerarId();
        this.nome = nome;
        this.vegano = vegano;
    }
    gerarId() {
        return Date.now();
    }
}
exports.ModalidadePaes = ModalidadePaes;
class EstoquePaes {
    constructor(modalidadeID, quantidade, precoVenda) {
        this.id = this.gerarId();
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
    }
    gerarId() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
class VendaPaes {
    constructor(cpfClient, valorTotal, itensComprados) {
        this.cpfClient = cpfClient;
        this.id = this.gerarId();
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    gerarId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
