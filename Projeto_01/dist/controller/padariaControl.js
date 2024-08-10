"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscaVenda = exports.registrarVenda = exports.removerEstoque = exports.Adicionarestoque = exports.buscaEstoque = exports.listaEstoque = exports.cadastroEstoque = exports.excluirModalidade = exports.mudarModalidade = exports.pesquisaModalidade = exports.listaModalidades = exports.cadastrarModal = void 0;
const PadariaServices_1 = require("../service/PadariaServices");
const ModalidadeService = new PadariaServices_1.ServicePadoca();
const EstoqueService = new PadariaServices_1.ServiceEstoque(ModalidadeService);
const VendaService = new PadariaServices_1.ServiceVenda(ModalidadeService, EstoqueService);
function cadastrarModal(req, res) {
    try {
        const novaModalidade = ModalidadeService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade Adicionada com sucesso!",
            modalidade: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarModal = cadastrarModal;
;
function listaModalidades(req, res) {
    const Modalidades = ModalidadeService.ModalidadePadoca.filtraModalidades();
    res.status(200).json({
        mensagem: "Modalidades disponíveis:",
        Modalidades: Modalidades
    });
}
exports.listaModalidades = listaModalidades;
;
function pesquisaModalidade(req, res) {
    try {
        const modal = ModalidadeService.consultarModalidade(req.query.id);
        if (modal) {
            res.status(200).json({
                mensagem: "Modalidade encontrada!",
                Modalidade: modal
            });
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
    ;
}
exports.pesquisaModalidade = pesquisaModalidade;
;
function mudarModalidade(req, res) {
    try {
        const modal = ModalidadeService.modificarModalidade(req.body);
        if (modal) {
            res.status(200).json({
                mensagem: "Modalidade Modificada!",
                Modalidade: modal
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.mudarModalidade = mudarModalidade;
;
function excluirModalidade(req, res) {
    try {
        const index = ModalidadeService.excluirModalidade(req.body);
        if (index) {
            res.status(202).json({
                mensagem: "Modalidade Excluida com Sucesso!",
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.excluirModalidade = excluirModalidade;
;
function cadastroEstoque(req, res) {
    try {
        const newEstoque = EstoqueService.cadastrarEstoque(req.body);
        res.status(201).json({
            mensagem: "Estoque Cadastrado com sucesso!",
            Estoque: newEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastroEstoque = cadastroEstoque;
;
function listaEstoque(req, res) {
    const listaEstoques = EstoqueService.novoEstoque.TodoEstoque();
    res.status(200).json({
        mensagem: "Estoques Disponíveis:",
        Estoques: listaEstoques
    });
}
exports.listaEstoque = listaEstoque;
;
function buscaEstoque(req, res) {
    try {
        const Estoque = EstoqueService.filtrarEstoque(req.query.id);
        if (Estoque) {
            res.status(200).json({
                mensagem: "O estoque existe!",
                Estoque: Estoque
            });
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
    ;
}
exports.buscaEstoque = buscaEstoque;
;
function Adicionarestoque(req, res) {
    try {
        const EstoqueModificado = EstoqueService.adicionaEstoque(req.body);
        if (EstoqueModificado) {
            res.status(200).json({
                mensagem: "Estoque modificado!",
                Estoque: EstoqueModificado
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.Adicionarestoque = Adicionarestoque;
;
function removerEstoque(req, res) {
    try {
        const Estoque = EstoqueService.removerEstoque(req.body);
        if (Estoque) {
            res.status(200).json({
                mensagem: "Remoção realizada com Sucesso!",
                Estoque: Estoque
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.removerEstoque = removerEstoque;
;
function registrarVenda(req, res) {
    try {
        const Venda = VendaService.registroVenda(req.body);
        if (Venda) {
            res.status(200).json({
                mensagem: "Registro Realizado!",
                Venda: Venda
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.registrarVenda = registrarVenda;
;
function buscaVenda(req, res) {
    try {
        const Venda = VendaService.filtraVenda(req.query.id);
        if (Venda) {
            res.status(200).json({
                mensagem: "Venda encontrada!",
                Venda: Venda
            });
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
    ;
}
exports.buscaVenda = buscaVenda;
;
