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
exports.UsuarioService = void 0;
const usuario_1 = require("../model/entity/usuario");
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
const PessoaRepository_1 = require("../repository/PessoaRepository");
class UsuarioService {
    constructor() {
        this.PessoaRepository = PessoaRepository_1.PessoaRepository.getInstance();
        this.UsuarioRepository = UsuarioRepository_1.UsuarioRepository.getInstance();
    }
    cadastraUsuario(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPessoa, senha } = usuarioData;
            const usuario = new usuario_1.Usuario(undefined, idPessoa, senha);
            let pessoaExiste = yield this.PessoaRepository.filtrarPessoaByNameId(usuario.idPessoa);
            if (pessoaExiste.length == 0) {
                throw new Error("Pessoa com id inexistente.");
            }
            let usuarioEncontrado = yield this.UsuarioRepository.filtrarUsuarioById(undefined, usuario.idPessoa);
            if (usuarioEncontrado.length > 0) {
                throw new Error("Usuario com esse idPessoa já cadastrado!");
            }
            const novoUsuario = yield this.UsuarioRepository.insereUsuario(usuario);
            console.log("Cadastrado:", novoUsuario);
            return novoUsuario;
        });
    }
    atualizaUsuario(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idPessoa, senha } = usuarioData;
            const usuario = new usuario_1.Usuario(id, idPessoa, senha);
            let usuarioEncontrado = yield this.UsuarioRepository.filtrarUsuarioById(usuario.id, undefined);
            if (usuarioEncontrado.length == 0) {
                throw new Error("Usuario não encontrado!");
            }
            yield this.UsuarioRepository.atualizaUsuario(usuario);
            console.log("Atualizado:", usuario);
            return usuario;
        });
    }
    deletaUsuario(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idPessoa, senha } = usuarioData;
            const usuario = new usuario_1.Usuario(id, idPessoa, senha);
            let usuarioEncontrado = yield this.UsuarioRepository.filtrarUsuarioById(id);
            if (usuarioEncontrado.length == 0) {
                throw new Error("Usuario não encontrado.");
            }
            usuarioEncontrado = yield this.UsuarioRepository.confirmaSenhaById(usuario.id, usuario.idPessoa, undefined);
            if (usuarioEncontrado.length == 0) {
                throw new Error("Usuario com idPessoa não compatível");
            }
            usuarioEncontrado = yield this.UsuarioRepository.confirmaSenhaById(usuario.id, undefined, usuario.senha);
            if (usuarioEncontrado.length == 0) {
                throw new Error("Usuario com senha não compatível.");
            }
            yield this.UsuarioRepository.deletaUsuario(usuario);
            console.log("Deletado: ", usuario);
            return usuario;
        });
    }
    filtraUsuario(usuarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(usuarioData, 10);
            let usuarioEncontrado = yield this.UsuarioRepository.filtrarUsuarioById(id);
            if (usuarioEncontrado.length == 0) {
                throw new Error("Usuario não encontrado.");
            }
            const usuario = yield this.UsuarioRepository.filtraUsuario(id);
            console.log("Filtrado: ", usuario);
            return usuario;
        });
    }
    filtrarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield this.UsuarioRepository.filtrarUsuarios();
            console.log("Filtrados: ", usuarios);
            return usuarios;
        });
    }
}
exports.UsuarioService = UsuarioService;
