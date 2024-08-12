"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const DataUtil_1 = require("../../util/DataUtil");
class Pessoa {
    constructor(id, name, email) {
        this.ValidateInfo(id, name, email);
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
    }
    ValidateInfo(id, name, email) {
        let error = '';
        if (typeof id !== 'number' || typeof name !== 'string' || typeof email !== 'string') {
            error += ("Informações incorretas. ");
        }
        if (!(0, DataUtil_1.verificaFormatoEmail)(email)) {
            error += ('O email deve possuir o formato correto!');
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Pessoa = Pessoa;
