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
        console.log();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS Biblioteca.livros(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL
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
    insertBook(title, author, isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO Biblioteca.livros (title, author, isbn) VALUES (?, ?, ?) ;`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [title, author, isbn]);
                console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
                const book = new book_1.Book(resultado.insertId, title, author, isbn);
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
    search(id_Isbn, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id_Isbn]);
                return new Promise((resolve) => {
                    resolve(result.length);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o ISBN/ID ${id_Isbn}, gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    // async search(id_Isbn: string | number) {
    //     let query: string;
    //     if(typeof id_Isbn === "string"){
    //         query = "SELECT * FROM Biblioteca.livros WHERE isbn = ?";
    //     } else {
    //         query = "SELECT * FROM Biblioteca.livros WHERE id = ?" ;
    //     }
    //     try {
    //         const result = await executarComandoSQL(query, [id_Isbn]);
    //         if (result.length > 0) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } catch (err: any) {
    //         console.error(`Falha ao procurar o ISBN/ID ${id_Isbn}, gerando o erro: ${err}`);
    //         throw err;
    //     }
    // }
    filterbook() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM Biblioteca.livros";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(result);
                });
            }
            catch (err) {
                console.error(`Falha ao buscar livros: ${err}`);
                throw err;
            }
        });
    }
    filterId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM Biblioteca.livros where id = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro localizado com sucesso, ID: ', result);
                return new Promise((resolve) => {
                    resolve(result);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o livro com o ID: ${id}`);
                throw err;
            }
        });
    }
    updateBook(id, title, author, isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE Biblioteca.livros set title = ?, author = ?, isbn = ? where id = ?;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [title, author, isbn, id]);
                console.log('Livro atualizado com sucesso, ID: ', result);
                const livro = new book_1.Book(id, title, author, isbn);
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteBook(id, title, author, isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM Biblioteca.livros where id = ?`;
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro deletado com sucesso, ID: ', result);
                const book = new book_1.Book(id, title, author, isbn);
                return new Promise((resolve) => {
                    resolve(book);
                });
            }
            catch (err) {
                console.error(`Erro ao deletar o livro de ID ${id}`);
                throw err;
            }
        });
    }
}
exports.bookRepository = bookRepository;
