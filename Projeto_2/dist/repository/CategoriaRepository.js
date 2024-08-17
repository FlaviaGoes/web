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
exports.CategoriaRepository = void 0;
const mysql_1 = require("../database/mysql");
class CategoriaRepository {
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new CategoriaRepository();
        }
        return this.instance;
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Categoria
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
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
    insereCategoria(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO biblioteca.Categoria(name) VALUES (?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [categoria.name]);
                console.log('Usuario cadastrado com sucesso!');
                categoria.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(categoria);
                });
            }
            catch (err) {
                console.error('Erro ao cadastrar Categoria: ', err);
                throw err;
            }
        });
    }
    atualizaCategoria(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE biblioteca.Categoria set name = ? where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [categoria.name, categoria.id]);
                console.log('Categoria atualizada com sucesso!');
                return new Promise((resolve) => {
                    resolve(categoria);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar categoria de ID ${categoria.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletaCategoria(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM biblioteca.Categoria where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [categoria.id]);
                console.log('Categoria deletada com sucesso: ', categoria);
                return new Promise((resolve) => {
                    resolve(categoria);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar categoria de ID ${categoria.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtraCategoriaById(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Categoria where ";
            const params = [];
            if (id) {
                query += "id = ?";
                params.push(id);
            }
            if (name) {
                query += "name = ?";
                params.push(name);
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
                console.error(`Falha ao procurar categoria gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    confirmaCategoriaById(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = "SELECT * FROM biblioteca.Categoria where id = ? and name = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id, name]);
                console.log('Busca afetuada com sucesso: ', resultado);
                return resultado;
            }
            catch (err) {
                console.error(`Falha ao procurar categoria com id ${id} e name ${name} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filtrarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM biblioteca.Categoria";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.log('Falha ao listar categorias!');
                throw err;
            }
        });
    }
}
exports.CategoriaRepository = CategoriaRepository;
