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
            const { title, author, isbn } = bookData;
            if (!title || !author || !isbn) {
                throw new Error("Missing information");
            }
            const isbnBook = isbn.toString();
            const exists = yield this.bookRepository.search(isbnBook);
            if (exists === true)
                throw new Error("O livro já existe!");
            const book = yield this.bookRepository.insertBook(title, author, isbn);
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
    IdBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!bookData) {
                throw new Error("Deve inserir ID do livro!");
            }
            const id = parseInt(bookData, 10);
            const book = yield this.bookRepository.filterId(id);
            console.log("Livro encontrado!", book);
            return book;
        });
    }
    removeLivro(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, isbn } = bookData;
            if (!id || !title || !author || !isbn) {
                throw new Error("Informações incompletas");
            }
            const idNumber = parseInt(id, 10);
            const titulo = title.toString();
            const autor = author.toString();
            const codigo = isbn.toString();
            const exists = yield this.bookRepository.search(idNumber);
            if (exists === false) {
                throw new Error("Livro não existe!");
            }
            const book = yield this.bookRepository.deleteBook(idNumber, titulo, autor, codigo);
            console.log("Livro removido: ", book);
            return book;
        });
    }
}
exports.ServiceBook = ServiceBook;
