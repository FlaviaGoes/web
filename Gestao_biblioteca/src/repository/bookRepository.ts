import { executarComandoSQL } from "../database/mysql";
import { Book } from "../model/book";

export class bookRepository{
    constructor(){
        this.createTable();
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS Books.library(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL
        )`
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
        console.error('Error');
        }
    };

    async insertBook(title: string, author: string) :Promise<Book>{
        const query = "INSERT INTO Books.library (title, author) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const book = new Book(resultado.insertId, title, author);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

}