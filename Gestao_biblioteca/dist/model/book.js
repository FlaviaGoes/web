"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, isbn) {
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
        this.isbn = isbn || '';
    }
}
exports.Book = Book;
