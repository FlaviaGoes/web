"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroDto = void 0;
class LivroDto {
    constructor(id, titulo, autor, categoriaId) {
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaId = categoriaId || 0;
    }
}
exports.LivroDto = LivroDto;
