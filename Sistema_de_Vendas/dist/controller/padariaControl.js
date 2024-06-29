"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarModal = void 0;
const PadariaServices_1 = require("../service/PadariaServices");
const ModalidadeService = new PadariaServices_1.ServicePadoca();
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
