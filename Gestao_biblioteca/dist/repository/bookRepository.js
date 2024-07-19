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
exports.bookRepository = void 0;
const mysql_1 = require("../database/mysql");
const book_1 = require("../model/book");
class bookRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS Books.library(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    ;
    insertBook(title, author) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO Books.library (title, author) VALUES (?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                const book = new book_1.Book(resultado.insertId, title, author);
                return new Promise((resolve) => {
                    resolve(book);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o livro:', err);
                throw err;
            }
        });
    }
}
exports.bookRepository = bookRepository;
