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
exports.LivroRepository = void 0;
const mysql_1 = require("../database/mysql");
class LivroRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new LivroRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            autor VARCHAR(255) NOT NULL,
            categoriaId INT NOT NULL
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
    insereLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Livro(titulo, autor, categoriaId) VALUES (?,?,?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [livro.titulo, livro.autor, livro.categoriaId]);
                console.log('Livro cadastrado com sucesso!');
                livro.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error('Erro ao cadastrar Usuario: ', err);
                throw err;
            }
        });
    }
    atualizaLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Livro set titulo = ?, autor = ?, categoriaId = ? where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [livro.titulo, livro.autor, livro.categoriaId, livro.id]);
                console.log('Livro atualizado com sucesso!');
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o livro de ID ${livro.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletaLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Livro where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [livro.id]);
                console.log('Livro deletado com sucesso: ', livro);
                return new Promise((resolve) => {
                    resolve(livro);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o livro de ID ${livro.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtraLivro(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Livro where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Livro localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar Livro gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Usuario";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.log('Falha ao listar livros cadastradas!');
                throw err;
            }
        });
    }
}
exports.LivroRepository = LivroRepository;
