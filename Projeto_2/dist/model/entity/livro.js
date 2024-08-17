"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(id, titulo, autor, categoriaId) {
        this.validateInfo(titulo, autor, categoriaId);
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaId = categoriaId || 0;
    }
    validateInfo(titulo, autor, categoriaId) {
        let error = '';
        if (typeof titulo !== 'string' || typeof autor !== 'string' || typeof categoriaId !== 'number') {
            error += ("Informações incompletas ou incorretas. ");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Livro = Livro;
