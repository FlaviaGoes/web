"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDto = void 0;
class UsuarioDto {
    constructor(id, idPessoa, senha) {
        this.id = id || 0;
        this.idPessoa = idPessoa || 0;
        this.senha = senha || '';
    }
}
exports.UsuarioDto = UsuarioDto;
