"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaRequestDto = void 0;
class PessoaRequestDto {
    constructor(id, name, email) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
    }
}
exports.PessoaRequestDto = PessoaRequestDto;
