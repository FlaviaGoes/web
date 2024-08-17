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
exports.EmprestimoService = void 0;
const emprestimo_1 = require("../model/entity/emprestimo");
const EmprestimoRepository_1 = require("../repository/EmprestimoRepository");
const LivroRepository_1 = require("../repository/LivroRepository");
const UsuarioRepository_1 = require("../repository/UsuarioRepository");
class EmprestimoService {
    constructor() {
        this.EmprestimoRepository = EmprestimoRepository_1.EmprestimoRepository.getInstance();
        this.LivroRepository = LivroRepository_1.LivroRepository.getInstance();
        this.UsuarioRepository = UsuarioRepository_1.UsuarioRepository.getInstance();
    }
    registraEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { livroId, usuarioId, dataEmprestimo, dataDevolucao } = emprestimoData;
            const emprestimo = new emprestimo_1.Emprestimo(undefined, livroId, usuarioId, dataEmprestimo, dataDevolucao);
            const livroExiste = yield this.LivroRepository.filtraLivro(emprestimo.livroId);
            if (livroExiste.length == 0) {
                throw new Error("Livro não encontrado no repositório");
            }
            const usuarioExiste = yield this.UsuarioRepository.filtrarUsuarioById(emprestimo.usuarioId);
            if (usuarioExiste.length == 0) {
                throw new Error("Usuario não cadastrado");
            }
            const novoEmprestimo = yield this.EmprestimoRepository.registraEmprestimo(emprestimo);
            console.log("Cadastrado:", novoEmprestimo);
            return novoEmprestimo;
        });
    }
    atualizaEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, livroId, usuarioId, dataEmprestimo, dataDevolucao } = emprestimoData;
            const emprestimo = new emprestimo_1.Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);
            let emprestimoExiste = yield this.EmprestimoRepository.filtraEmprestimo(emprestimo.id);
            if (emprestimoExiste.length == 0) {
                throw new Error("Emprestimo não encontrado!");
            }
            const livroExiste = yield this.LivroRepository.filtraLivro(emprestimo.livroId);
            if (livroExiste.length == 0) {
                throw new Error("Livro não encontrado no repositório");
            }
            const usuarioExiste = yield this.UsuarioRepository.filtrarUsuarioById(emprestimo.usuarioId);
            if (usuarioExiste.length == 0) {
                throw new Error("Usuario não cadastrado");
            }
            yield this.EmprestimoRepository.atualizaEmprestimo(emprestimo);
            console.log("Atualizado:", emprestimo);
            return emprestimo;
        });
    }
    deletaEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, livroId, usuarioId, dataEmprestimo, dataDevolucao } = emprestimoData;
            const emprestimo = new emprestimo_1.Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);
            let emprestimoExiste = yield this.EmprestimoRepository.filtraEmprestimo(emprestimo.id);
            if (emprestimoExiste.length == 0) {
                throw new Error("Emprestimo não encontrado!");
            }
            emprestimoExiste = yield this.EmprestimoRepository.confirmaEmprestimoById(emprestimo.id, emprestimo.livroId);
            if (emprestimoExiste.length == 0) {
                throw new Error("Confira os dados do livro informado");
            }
            emprestimoExiste = yield this.EmprestimoRepository.confirmaEmprestimoById(emprestimo.id, undefined, emprestimo.usuarioId);
            if (emprestimoExiste.length == 0) {
                throw new Error("Confira os dados do usuario informado");
            }
            yield this.EmprestimoRepository.deletaEmprestimo(emprestimo);
            console.log("Deletado: ", emprestimo);
            return emprestimo;
        });
    }
    filtraEmprestimo(emprestimoData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(emprestimoData, 10);
            const emprestimo = yield this.EmprestimoRepository.filtraEmprestimo(id);
            if (emprestimo.length == 0) {
                throw new Error("Emprestimo não encontrado!");
            }
            console.log("Filtrado: ", emprestimo);
            return emprestimo;
        });
    }
    filtrarEmprestimos() {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimos = yield this.EmprestimoRepository.filtrarEmprestimos();
            console.log("Filtrados: ", emprestimos);
            return emprestimos;
        });
    }
}
exports.EmprestimoService = EmprestimoService;
