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
exports.PessoaRepository = void 0;
const mysql_1 = require("../database/mysql");
class PessoaRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new PessoaRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
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
    inserePessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Pessoa(name, email) VALUES (?,?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pessoa.name, pessoa.email]);
                console.log('Pessoa cadastrada com sucesso!');
                pessoa.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(pessoa);
                });
            }
            catch (err) {
                console.error('Erro ao cadastrar Pessoa:', err);
                throw err;
            }
        });
    }
    atualizaPessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Pessoa set name = ?, email = ? where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pessoa.name, pessoa.email, pessoa.id]);
                console.log('Pessoa atualizada com sucesso!');
                return new Promise((resolve) => {
                    resolve(pessoa);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar a pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletaPessoa(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Pessoa where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pessoa.id]);
                console.log('Pessoa deletada com sucesso: ', pessoa);
                return new Promise((resolve) => {
                    resolve(pessoa);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar a Pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarPessoaByNameId(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Pessoa where ";
            const params = [];
            if (name) {
                query += "name = ?";
                params.push(name);
            }
            if (id) {
                query += "id = ?";
                params.push(id);
            }
            if (email) {
                query += "email = ?";
                params.push(email);
            }
            if (params.length === 0) {
                throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
            }
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, params);
                console.log('Busca afetuada com sucesso: ', resultado);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao procurar pessoa gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarPessoas() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Pessoa";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.log('Falha ao listar pessoas cadastradas!');
                throw err;
            }
        });
    }
}
exports.PessoaRepository = PessoaRepository;
