import { Book } from "../model/book";
import { bookRepository } from "../repository/bookRepository";

export class bookService{
    bookRepository : bookRepository = new bookRepository();

    async bookInsert (bookData: any): Promise<Book> {
        const {title, author} = bookData;
        if(!title || !author){
            throw new Error("Missing information");
        }

        const book = await this.bookRepository.insertBook(title, author);
        console.log("Insert succeded", book);
        return book;
    }
}