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
exports.ServiceBook = void 0;
const bookRepository_1 = require("../repository/bookRepository");
class ServiceBook {
    constructor() {
        this.bookRepository = new bookRepository_1.bookRepository();
    }
    bookInsert(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, isbn } = bookData;
            if (!title || !author || !isbn) {
                throw new Error("Missing information");
            }
            const Isbn = this.bookRepository.searchIsbn;
            if (isbn == Isbn)
                throw new Error("Isban já inserido");
            const book = yield this.bookRepository.insertBook(title, author, isbn);
            console.log("Insert succeded", book);
            return book;
        });
    }
}
exports.ServiceBook = ServiceBook;
