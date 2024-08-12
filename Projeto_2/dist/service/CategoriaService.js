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
exports.CategoriaService = void 0;
const categoria_1 = require("../model/entity/categoria");
const CategoriaRepository_1 = require("../repository/CategoriaRepository");
class CategoriaService {
    constructor() {
        this.CategoriaRepository = CategoriaRepository_1.CategoriaRepository.getInstance();
    }
    cadastrarCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = new categoria_1.Categoria(undefined, categoriaData);
            const novaCategoria = yield this.CategoriaRepository.insereCategoria(categoria);
            console.log("Cadastrado: ", novaCategoria);
            return novaCategoria;
        });
    }
    atualizaCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = categoriaData;
            const categoria = new categoria_1.Categoria(id, name);
            yield this.CategoriaRepository.atualizaCategoria(categoria);
            console.log("Atualizada:", categoria);
            return categoria;
        });
    }
    deletaCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = categoriaData;
            const categoria = new categoria_1.Categoria(id, name);
            yield this.CategoriaRepository.deletaCategoria(categoria);
            console.log("Deletada: ", categoria);
            return categoria;
        });
    }
    filtraCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(categoriaData, 10);
            const categoria = yield this.CategoriaRepository.filtraCategoria(id);
            console.log("Filtrada: ", categoria);
            return categoria;
        });
    }
    filtrarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield this.CategoriaRepository.filtrarCategorias();
            console.log("Filtradas: ", categorias);
            return categorias;
        });
    }
}
exports.CategoriaService = CategoriaService;
