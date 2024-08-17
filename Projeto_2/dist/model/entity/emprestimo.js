"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
const DataUtil_1 = require("../../util/DataUtil");
DataUtil_1.verificaFormatoData;
class Emprestimo {
    constructor(id, livroId, usuarioId, dataEmprestimo, dataDevolucao) {
        this.validateInfo(livroId, usuarioId, dataEmprestimo);
        this.id = id || 0;
        this.livroId = livroId || 0;
        this.usuarioId = usuarioId || 0;
        this.dataEmprestimo = (0, DataUtil_1.stringParaData)(dataEmprestimo || '');
        this.dataDevolucao = (0, DataUtil_1.calculaDateDevolucao)(dataDevolucao || '');
    }
    validateInfo(livroId, usuarioId, dataEmprestimo) {
        let error = '';
        if (typeof livroId !== 'number' || typeof usuarioId !== 'number' || typeof dataEmprestimo !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }
        if (!(0, DataUtil_1.verificaFormatoData)(dataEmprestimo)) {
            error += ("A data do Emprestimo deve possuir o formato: dd/MM/yyyy");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Emprestimo = Emprestimo;
