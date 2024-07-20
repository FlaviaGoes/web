import { Book } from "../model/book";
import { bookRepository } from "../repository/bookRepository";

export class ServiceBook{
    bookRepository : bookRepository = new bookRepository();

    async bookInsert (bookData: any): Promise<Book> {
        const {title, author, isbn} = bookData;
        if(!title || !author || !isbn){
            throw new Error("Missing information");
        }

        const Isbn = this.bookRepository.searchIsbn;
        if(isbn == Isbn)
            throw new Error("Isban já inserido");
        
        const book = await this.bookRepository.insertBook(title, author, isbn);
        console.log("Insert succeded", book);
        return book;
    }
}