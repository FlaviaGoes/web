"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = exports.EstoquePaes = exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(nome, vegano) {
        this.nome = nome;
        this.vegano = vegano;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
    }
}
exports.ModalidadePaes = ModalidadePaes;
class EstoquePaes {
    constructor(modalidadeID, quantidade, precoVenda) {
        this.modalidadeID = modalidadeID;
        this.quantidade = quantidade;
        this.precoVenda = precoVenda;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
class VendaPaes {
    constructor(cpfClient, valorTotal, itensComprados) {
        this.cpfClient = cpfClient;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
