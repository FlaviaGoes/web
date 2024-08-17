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
const CategoriaRepository_1 = require("../repository/CategoriaRepository");
class LivroService {
    constructor() {
        this.LivroRepository = LivroRepository_1.LivroRepository.getInstance();
        this.CategoriaRepository = CategoriaRepository_1.CategoriaRepository.getInstance();
    }
    cadastrarLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, autor, categoriaId } = livroData;
            const livro = new livro_1.Livro(undefined, titulo, autor, categoriaId);
            let categoriaExiste = yield this.CategoriaRepository.filtraCategoriaById(livro.categoriaId, undefined);
            if (categoriaExiste.length == 0) {
                throw new Error("Categoria informada não encontrada");
            }
            const novoLivro = yield this.LivroRepository.insereLivro(livro);
            console.log("Cadastrado:", novoLivro);
            return novoLivro;
        });
    }
    atualizaLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, autor, titulo, categoriaId } = livroData;
            const idNumber = parseInt(id, 10);
            const livro = new livro_1.Livro(idNumber, titulo, autor, categoriaId);
            let livroExiste = yield this.LivroRepository.filtraLivro(livro.id);
            if (livroExiste.length == 0) {
                throw new Error("Id não encontrado");
            }
            let categoriaExiste = yield this.CategoriaRepository.filtraCategoriaById(livro.categoriaId, undefined);
            if (categoriaExiste.length == 0) {
                throw new Error("Categoria incorreta.");
            }
            yield this.LivroRepository.atualizaLivro(livro);
            console.log("Atualizado: ", livro);
            return livro;
        });
    }
    deletaLivro(livroData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, autor, categoriaId } = livroData;
            const idNumber = parseInt(id, 10);
            const livro = new livro_1.Livro(idNumber, titulo, autor, categoriaId);
            let livroExiste = yield this.LivroRepository.filtraLivro(livro.id);
            if (livroExiste.length == 0) {
                throw new Error("Livro não existe!");
            }
            livroExiste = yield this.LivroRepository.confirmaLivroById(livro.id, livro.titulo);
            if (livroExiste.length == 0) {
                throw new Error("Titulo incorreto");
            }
            livroExiste = yield this.LivroRepository.confirmaLivroById(livro.id, undefined, livro.autor);
            if (livroExiste.length == 0) {
                throw new Error("Autor incorreto");
            }
            livroExiste = yield this.LivroRepository.confirmaLivroById(livro.id, undefined, undefined, livro.categoriaId);
            if (livroExiste.length == 0) {
                throw new Error("Categoria incorreta!");
            }
            yield this.LivroRepository.deletaLivro(livro);
            console.log("Deletado: ", livro);
            return livro;
        });
    }
    filtraLivro(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(usuarioData, 10);
            const livro = yield this.LivroRepository.filtraLivro(id);
            if (livro.length == 0) {
                throw new Error("Livro informado não encontrado!");
            }
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
