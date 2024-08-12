"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroService = void 0;
const livro_1 = require("../model/entity/livro");
const LivroRepository_1 = require("../repository/LivroRepository");
class LivroService {
    constructor() {
        this.LivroRepository = LivroRepository_1.LivroRepository.getInstance();
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, autor, categoriaId } = livroData;
            const livro = new livro_1.Livro(undefined, titulo, autor, categoriaId);
            const novoLivro = yield this.LivroRepository.insereLivro(livro);
            console.log("Cadastrado:", novoLivro);
            return novoLivro;
        });
    }
    atualizaLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, autor, titulo, categoriaId } = livroData;
            const livro = new livro_1.Livro(id, autor, titulo, categoriaId);
            yield this.LivroRepository.atualizaLivro(livro);
            console.log("Atualizado: ", livro);
            return livro;
        });
    }
    deletaLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, autor, categoriaId } = livroData;
            const livro = new livro_1.Livro(id, titulo, autor, categoriaId);
            yield this.LivroRepository.deletaLivro(livro);
            console.log("Deletado: ", livro);
            return livro;
        });
    }
    filtraLivro(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(usuarioData, 10);
            const livro = yield this.LivroRepository.filtraLivro(id);
            console.log("Filtrado: ", livro);
            return livro;
        });
    }
    filtrarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const livros = yield this.LivroRepository.filtrarLivros();
            console.log("Filtrados: ", livros);
            return livros;
        });
    }
}
exports.LivroService = LivroService;
