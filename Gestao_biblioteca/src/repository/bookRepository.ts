import { executarComandoSQL } from "../database/mysql";
import { Book } from "../model/book";

export class bookRepository{
    constructor(){
        this.createTable();
        console.log()
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS Biblioteca.books(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publishedDate VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL,
            pages INT(10) NOT NULL,
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
        console.error('Error');
        }
    };

    async insertBook(title: string, author: string, publishedDate:string, isbn: string, pages:number, language: string, publisher: string) :Promise<Book>{
        const query =`INSERT INTO Biblioteca.books (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)` 

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const book = new Book(resultado.insertId, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async search(id_Isbn: string | number, query: string):Promise<number> {
        try {
            const result = await executarComandoSQL(query, [id_Isbn]);
            return new Promise<number>((resolve)=>{
                resolve(result.length);
            })
        } catch (err: any) {
            console.error(`Falha ao procurar o ISBN/ID ${id_Isbn}, gerando o erro: ${err}`);
            throw err;
        }
    }

    async searchUpdate(isbn: string, id: number):Promise<number> {
        const query = "SELECT * FROM Biblioteca.books WHERE isbn = ? AND id != ?"
        try {
            const result = await executarComandoSQL(query, [isbn, id]);
            return new Promise<number>((resolve)=>{
                resolve(result.length);
            })
        } catch (err: any) {
            console.error(`Falha ao procurar livro com isbn ${isbn}, gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterbook():Promise<Book[]>{
        const query = "SELECT * FROM Biblioteca.books";

        try{
            const result = await executarComandoSQL(query, []);
            return new Promise<Book[]>((resolve)=>{
                resolve(result);
            })
        } catch (err:any){
            console.error(`Falha ao buscar livros: ${err}`);
            throw err;
        }
    }

    async filterId (id: number) : Promise<Book> {
        const query = "SELECT * FROM Biblioteca.books where id = ?";

        try {
            const result = await executarComandoSQL(query, [id]);
            console.log('Livro localizado com sucesso, ID: ', result);
            return new Promise<Book>((resolve)=>{
                resolve(result);
            })
        } catch (err:any){
            console.error(`Falha ao procurar o livro com o ID: ${id}`);
            throw err;
        }
    }

    async updateBook(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Book>{
        const query = "UPDATE Biblioteca.books set title = ?, author = ?, publishedDate = ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;" ;

        try {
            const result = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', result);
            const livro = new Book(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Book>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteBook(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string):Promise<Book>{
        const query = `DELETE FROM Biblioteca.books where id = ?`

            try{
                    const result = await executarComandoSQL(query, [id]);
                    console.log('Livro deletado com sucesso, ID: ', result);
                    const book = new Book(id, title, author, publishedDate, isbn, pages, language, publisher);
                    return new Promise<Book>((resolve)=>{
                        resolve(book);
                    })
            } catch (err:any) {
                console.error(`Erro ao deletar o livro de ID ${id}`);
                throw err;
            }
    }
}