"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoDto = void 0;
class EmprestimoDto {
    constructor(id, livroId, usuarioId, dataEmprestimo, dataDevolucao) {
        this.id = id || 0;
        this.livroId = livroId || 0;
        this.usuarioId = usuarioId || 0;
        this.dataEmprestimo = dataEmprestimo || '';
        this.dataDevolucao = dataDevolucao || '';
    }
}
exports.EmprestimoDto = EmprestimoDto;
