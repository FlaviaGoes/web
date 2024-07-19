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
exports.InsertBook = InsertBook;
const bookService_1 = require("../service/bookService");
const bookService = new bookService_1.ServiceBook();
function InsertBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield bookService.bookInsert(req.body);
            res.status(201).json({
                mensagem: "Livro adicionado com sucesso!",
                Livro: book
            });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
