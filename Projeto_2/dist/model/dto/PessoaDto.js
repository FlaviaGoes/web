"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDto = void 0;
class PessoaDto {
    constructor(id, name, email) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
    }
}
exports.PessoaDto = PessoaDto;
