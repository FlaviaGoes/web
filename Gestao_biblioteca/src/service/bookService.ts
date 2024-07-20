import { Book } from "../model/book";
import { bookRepository } from "../repository/bookRepository";

export class ServiceBook{
    bookRepository : bookRepository = new bookRepository();

    async bookInsert (bookData: any): Promise<Book> {
        const {title, author, isbn} = bookData;
        if(!title || !author || !isbn){
            throw new Error("Missing information");
        }

        const isbnBook = isbn.toString();

        const exists = await this.bookRepository.search(isbnBook);
        if(exists === true)
            throw new Error("O livro já existe!");


        const book = await this.bookRepository.insertBook(title, author, isbn);
        console.log("Insert succeded", book);
        return book;
    }

    async imprimirBooks(): Promise<Book[]>{
        const book = await this.bookRepository.filterbook();
        console.log("Todos os livros:", book);
        return book;
    }

    async IdBook(bookData: any): Promise<Book>{
        if(!bookData){
            throw new Error("Deve inserir ID do livro!");
        }
        const id = parseInt(bookData, 10);
        const book = await this.bookRepository.filterId(id);
        console.log("Livro encontrado!", book);
        return book;
    }

    async removeLivro(bookData: any): Promise<Book>{
        const {id, title, author, isbn} = bookData;
        if(!id || !title || !author || !isbn){
            throw new Error("Informações incompletas");
        }

        const idNumber = parseInt(id, 10);
        const titulo = title.toString();
        const autor = author.toString();
        const codigo = isbn.toString();

        const exists = await this.bookRepository.search(idNumber);
        if(exists === false) {
            throw new Error("Livro não existe!");
        }
            
        const book = await this.bookRepository.deleteBook(idNumber, titulo, autor, codigo);
            console.log("Livro removido: ", book);
            return book;
    }
}