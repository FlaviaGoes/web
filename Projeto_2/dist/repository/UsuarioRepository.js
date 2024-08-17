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
exports.UsuarioRepository = void 0;
const mysql_1 = require("../database/mysql");
class UsuarioRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new UsuarioRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Usuario
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            idPessoa INT NOT NULL,
            senha VARCHAR(255) NOT NULL
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
    insereUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Usuario(idPessoa, senha) VALUES (?,?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [usuario.idPessoa, usuario.senha]);
                console.log('Usuario cadastrado com sucesso!');
                usuario.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(usuario);
                });
            }
            catch (err) {
                console.error('Erro ao cadastrar Usuario: ', err);
                throw err;
            }
        });
    }
    atualizaUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Usuario set idPessoa = ?, senha = ? where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [usuario.idPessoa, usuario.senha, usuario.id]);
                console.log('Pessoa atualizada com sucesso!');
                return new Promise((resolve) => {
                    resolve(usuario);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar a pessoa de ID ${usuario.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletaUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Usuario where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [usuario.id]);
                console.log('Usuario deletado com sucesso: ', usuario);
                return new Promise((resolve) => {
                    resolve(usuario);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o Usuario de ID ${usuario.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarUsuarioById(id, idPessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Usuario where ";
            const params = [];
            if (id) {
                query += "id = ?";
                params.push(id);
            }
            if (idPessoa) {
                query += "idPessoa = ?";
                params.push(idPessoa);
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
                console.error(`Falha ao procurar usuario gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    confirmaSenhaById(id, idPessoa, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Pessoa where id = ? and ";
            const params = [];
            if (idPessoa) {
                query += "idPessoa = ?";
                params.push(idPessoa);
            }
            if (senha) {
                query += "senha = ?";
                params.push(senha);
            }
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id, params]);
                console.log('Busca afetuada com sucesso: ', resultado);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao procurar usuario gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Usuario";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.log('Falha ao listar Usuarios cadastradas!');
                throw err;
            }
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
