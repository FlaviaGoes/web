"use strict";
// Validar senha 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, idPessoa, senha) {
        this.validateInfo(id, idPessoa, senha);
        this.id = id || 0;
        this.idPessoa = idPessoa || 0;
        this.senha = senha || '';
    }
    validateInfo(id, idPessoa, senha) {
        let error = '';
        if (typeof id !== 'number' || typeof idPessoa !== 'number' || typeof senha !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Usuario = Usuario;
