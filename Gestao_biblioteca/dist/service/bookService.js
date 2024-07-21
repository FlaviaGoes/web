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
exports.ServiceBook = void 0;
const bookRepository_1 = require("../repository/bookRepository");
class ServiceBook {
    constructor() {
        this.bookRepository = new bookRepository_1.bookRepository();
    }
    bookInsert(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!title || !author || !isbn) {
                throw new Error("Missing information");
            }
            const titulo = title.toString();
            const autor = author.toString();
            const date = publishedDate.toString();
            const codigo = isbn.toString();
            const pagesBook = parseInt(pages, 10);
            const idioma = language.toString();
            const auditora = publisher.toString();
            const exists = yield this.searchLivro(codigo);
            if (exists === true)
                throw new Error("O livro já existe!");
            const book = yield this.bookRepository.insertBook(titulo, autor, date, codigo, pagesBook, idioma, auditora);
            console.log("Insert succeded", book);
            return book;
        });
    }
    imprimirBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookRepository.filterbook();
            console.log("Todos os livros:", book);
            return book;
        });
    }
    searchLivro(id_Isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            let query;
            if (typeof id_Isbn === "string") {
                query = "SELECT * FROM Biblioteca.livros WHERE isbn = ?";
            }
            else {
                query = "SELECT * FROM Biblioteca.livros WHERE id = ?";
            }
            const result = yield this.bookRepository.search(id_Isbn, query);
            if (result > 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    IdBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bookData) {
                throw new Error("Deve inserir ID do livro!");
            }
            const id = parseInt(bookData, 10);
            const exists = yield this.searchLivro(id);
            if (exists === false)
                throw new Error("ID não encontrado!");
            const book = yield this.bookRepository.filterId(id);
            console.log("Livro encontrado!", book);
            return book;
        });
    }
    atualizaBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const idNumber = parseInt(id, 10);
            const titulo = title.toString();
            const autor = author.toString();
            const date = publishedDate.toString();
            const codigo = isbn.toString();
            const pagesBook = parseInt(pages, 10);
            const idioma = language.toString();
            const auditora = publisher.toString();
            const exists = yield this.searchLivro(idNumber);
            if (exists === false) {
                throw new Error("Livro não existe!");
            }
            const book = yield this.bookRepository.updateBook(idNumber, titulo, autor, date, codigo, pagesBook, idioma, auditora);
            console.log("Livro atualizado: ", book);
            return book;
        });
    }
    removeLivro(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, publishedDate, isbn, pages, language, publisher } = bookData;
            if (!id || !title || !author || !publishedDate || !isbn || !pages || !language || !publisher) {
                throw new Error("Informações incompletas");
            }
            const idNumber = parseInt(id, 10);
            const titulo = title.toString();
            const autor = author.toString();
            const date = publishedDate.toString();
            const codigo = isbn.toString();
            const pagesBook = parseInt(pages, 10);
            const idioma = language.toString();
            const auditora = publisher.toString();
            const exists = yield this.searchLivro(idNumber);
            if (exists === false) {
                throw new Error("Livro não existe!");
            }
            const book = yield this.bookRepository.deleteBook(idNumber, titulo, autor, date, codigo, pagesBook, idioma, auditora);
            console.log("Livro removido: ", book);
            return book;
        });
    }
}
exports.ServiceBook = ServiceBook;
