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
exports.EmprestimoRepository = void 0;
const mysql_1 = require("../database/mysql");
class EmprestimoRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new EmprestimoRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Emprestimo
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroId INT NOT NULL,
            usuarioId INT NOT NULL,
            dataEmprestimo DATE NOT NULL,
            dataDevolucao DATE NOT NULL
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
    registraEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Emprestimo(livroId, usuarioId, dataEmprestimo, dataDevolucao) VALUES (?,?,?,?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
                console.log('Emprestimo registrado com sucesso!');
                emprestimo.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(emprestimo);
                });
            }
            catch (err) {
                console.error('Erro ao cadastrar Usuario: ', err);
                throw err;
            }
        });
    }
    atualizaEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Emprestimo set livroId = ?, usuarioId = ?, dataEmprestimo = ?, dataDevolucao = ? where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
                console.log('Emprestimo atualizado com sucesso!');
                return new Promise((resolve) => {
                    resolve(emprestimo);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar a Emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletaEmprestimo(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Emprestimo where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [emprestimo.id]);
                console.log('Usuario deletado com sucesso: ', emprestimo);
                return new Promise((resolve) => {
                    resolve(emprestimo);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o Emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    confirmaEmprestimoById(id, livroId, usuarioId, dataEmprestimo, dataDevolucao) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Emprestimo where id = ? and ";
            const params = [];
            if (livroId) {
                query += "livroId = ?";
                params.push(livroId);
            }
            if (usuarioId) {
                query += "usuarioId = ?";
                params.push(usuarioId);
            }
            if (dataEmprestimo) {
                query += "dataEmprestimo = ?";
                params.push(dataEmprestimo);
            }
            if (dataDevolucao) {
                query += "dataDevolucao = ?";
                params.push(dataDevolucao);
            }
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id, params]);
                console.log('Busca afetuada com sucesso: ', resultado);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao procurar Emprestimo gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtraEmprestimo(id, livroId, usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Emprestimo where ";
            const params = [];
            if (id) {
                query += "id = ?";
                params.push(id);
            }
            if (livroId) {
                query += "livroId = ?";
                params.push(livroId);
            }
            if (usuarioId) {
                query += "usuarioId = ?";
                params.push(usuarioId);
            }
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [params]);
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
    filtrarEmprestimos() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Emprestimo";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.log('Falha ao listar Emprestimos registrados!');
                throw err;
            }
        });
    }
}
exports.EmprestimoRepository = EmprestimoRepository;
