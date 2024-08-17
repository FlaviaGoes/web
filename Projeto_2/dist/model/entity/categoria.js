"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(id, name) {
        this.validateInfo(name);
        this.id = id || 0;
        this.name = name || '';
    }
    validateInfo(name) {
        let error = '';
        if (typeof name !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Categoria = Categoria;
