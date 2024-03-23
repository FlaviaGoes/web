"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _anoNascimento) {
        this._nome = _nome;
        this._anoNascimento = _anoNascimento;
    }
    get anoNascimento() {
        return this._anoNascimento;
    }
    set anoNascimento(value) {
        this._anoNascimento = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    calculaIdade() {
        return Math.floor(new Date().getFullYear() - this._anoNascimento);
    }
}
exports.Pessoa = Pessoa;
