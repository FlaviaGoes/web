"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceVenda = exports.ServiceEstoque = exports.ServicePadoca = void 0;
const Produtos_1 = require("../model/Produtos");
const PadariaRepo_1 = require("../repository/PadariaRepo");
class ServicePadoca {
    constructor() {
        this.ModalidadePadoca = new PadariaRepo_1.GerenciaModalidades();
    }
    cadastrarModalidade(modalData) {
        const { nome, vegano } = modalData;
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome === nome && ModalidadePaes.vegano === vegano);
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
    mostrarModalidades() {
        return this.ModalidadePadoca.filtraModalidades();
    }
    consultarModalidade(id) {
        if (!id) {
            throw new Error("Necessário informar Modalidade ID");
        }
        else {
            const idNumber = parseInt(id, 10);
            const Modalidade = this.ModalidadePadoca.filtraModalID(idNumber);
            if (Modalidade) {
                return Modalidade;
            }
            else {
                throw new Error("Modalidade não encontrada!");
            }
        }
    }
    modificarModalidade(modalData) {
        const { id, nome, vegano } = modalData;
        const idNumber = parseInt(id, 10);
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.id === idNumber);
        if (!id || !nome || !vegano) {
            throw new Error("Informações incompletas");
        }
        else {
            if (existe) {
                return this.ModalidadePadoca.modificaModal(nome, vegano, existe);
            }
            else {
                throw new Error("Não existe a modalidade que deseja modificar.");
            }
        }
    }
    excluirModalidade(modalData) {
        const { id, nome, vegano } = modalData;
        const idNumber = parseInt(id, 10);
        const existe = this.ModalidadePadoca.ListaModal.find((ModalidadePaes) => ModalidadePaes.nome == nome && ModalidadePaes.id === idNumber && ModalidadePaes.vegano == vegano);
        if (!id || !nome || !vegano) {
            throw new Error("Informações Incompletas");
        }
        else {
            if (existe) {
                return this.ModalidadePadoca.excluirModal(existe);
            }
            else {
                throw new Error("Modalidade não existente");
            }
        }
    }
}
exports.ServicePadoca = ServicePadoca;
class ServiceEstoque {
    constructor(ServicePadoca) {
        this.novoEstoque = new PadariaRepo_1.GerenciaEstoque();
        this.ServicePadoca = ServicePadoca;
    }
    cadastrarEstoque(estoqueData) {
        const { modalidadeID, quantidade, precoVenda } = estoqueData;
        const idNumber = parseInt(modalidadeID, 10);
        const existeModalidade = this.ServicePadoca.ModalidadePadoca.filtraModalID(idNumber);
        if (!modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        else {
            if (existeModalidade) {
                const newEstoque = new Produtos_1.EstoquePaes(idNumber, quantidade, precoVenda);
                this.novoEstoque.insereEstoque(newEstoque);
                return newEstoque;
            }
            else {
                throw new Error("Essa modalidade não existe");
            }
        }
    }
    mostrarEstoque() {
        return this.novoEstoque.TodoEstoque();
    }
    filtrarEstoque(id) {
        if (!id) {
            throw new Error("Necessário informar ID do estoque");
        }
        else {
            const idNumber = parseInt(id, 10);
            const Estoque = this.novoEstoque.filtraEstoque(idNumber);
            if (Estoque) {
                return Estoque;
            }
            else {
                throw new Error("Estoque não encontrado!");
            }
        }
    }
    adicionaEstoque(estoqueData) {
        const { id, modalidadeID, quantidade, precoVenda } = estoqueData;
        const idNumber = parseInt(id, 10);
        const idModal = parseInt(modalidadeID, 10);
        const existe = this.novoEstoque.listaEstoque.find((EstoquePaes) => EstoquePaes.id === idNumber && EstoquePaes.modalidadeID === idModal);
        if (!id || !modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        else {
            if (existe) {
                return this.novoEstoque.AdicionarEstoque(existe, quantidade, precoVenda);
            }
            else {
                throw new Error("Não existe o estoque que quer modificar.");
            }
        }
    }
    removerEstoque(dataEstoque) {
        const { id, modalidadeID, quantidade, precoVenda } = dataEstoque;
        const idNumber = parseInt(id, 10);
        const idModal = parseInt(modalidadeID, 10);
        const existe = this.novoEstoque.listaEstoque.find((EstoquePaes) => EstoquePaes.id === idNumber && EstoquePaes.modalidadeID === idModal);
        if (!id || !modalidadeID || !quantidade || !precoVenda) {
            throw new Error("Informações incompletas");
        }
        else {
            if (existe) {
                const total = existe.quantidade - quantidade;
                if (total < 0) {
                    throw new Error(`Remoção rejeitada. Preço atual: ${existe.precoVenda} Quantidade atual: ${existe.quantidade}`);
                }
                else {
                    return this.novoEstoque.removerEstoque(existe, quantidade, precoVenda);
                }
            }
            else {
                throw new Error("Estoque/Modalidade não encontrado.");
            }
        }
    }
}
exports.ServiceEstoque = ServiceEstoque;
class ServiceVenda {
    constructor(ServicePadoca, ServiceEstoque) {
        this.novaVenda = new PadariaRepo_1.GerenciaVendas();
        this.ServicePadoca = ServicePadoca;
        this.ServiceEstoque = ServiceEstoque;
    }
    registroVenda(dataVenda) {
        const { cpf, itens } = dataVenda;
        if (!cpf || !itens) {
            throw new Error("Informações incompletas.");
        }
        const Venda = new Produtos_1.VendaPaes(cpf, 0, itens);
        for (let i = 0; i < itens.length; i++) {
            const item = itens[i];
            const Estoque = this.ServiceEstoque.filtrarEstoque(item.estoquePaesID);
            const Modalidade = this.ServicePadoca.consultarModalidade(Estoque.modalidadeID);
            if (!Estoque || !Modalidade) {
                throw Error("Estoque ou modalidade não encontrados");
            }
            const index = Estoque.quantidade - item.quantidade;
            if (index < 0) {
                throw new Error(`Estoque esgotado para a quantidade informada! Quantidade Atual: ${Estoque.quantidade} `);
            }
            else {
                Venda.itensComprados[i].nome = Modalidade === null || Modalidade === void 0 ? void 0 : Modalidade.nome;
                Venda.valorTotal += item.quantidade * Estoque.precoVenda;
                Estoque.quantidade -= item.quantidade;
            }
        }
        this.novaVenda.registrarVenda(Venda);
        return this.novaVenda.filtraVenda(Venda.id);
    }
    filtraVenda(id) {
        if (!id) {
            throw new Error("Necessário informar ID da Venda");
        }
        else {
            const idNumber = parseInt(id, 10);
            const Venda = this.novaVenda.filtraVenda(idNumber);
            if (Venda) {
                return Venda;
            }
            else {
                throw new Error("Venda não encontrada!");
            }
        }
    }
}
exports.ServiceVenda = ServiceVenda;
