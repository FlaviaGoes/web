import { executarComandoSQL } from "../database/mysql";
import { Book } from "../model/book";

export class bookRepository{
    constructor(){
        this.createTable();
        console.log()
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS Biblioteca.livros(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL
        )`
        try {
            const resultado =  await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
        console.error('Error');
        }
    };

    async insertBook(title: string, author: string, isbn: string) :Promise<Book>{
        const query = "INSERT INTO Biblioteca.livros (title, author, isbn) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, isbn]);
            console.log('Livro inserido com sucesso, ID: ', resultado.insertId);
            const book = new Book(resultado.insertId, title, author, isbn);
            return new Promise<Book>((resolve)=>{
                resolve(book);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async searchIsbn(isbn: string) :Promise<Book>{
        const query = "SELECT * FROM Biblioteca.livros where isbn = ?";

        try{
            const result = await executarComandoSQL(query, [isbn]);
            return new Promise<Book>((resolve)=>{
                resolve(result);
            })
        }
        catch (err:any){
            console.error(`Falha ao procurar o ISBN ${isbn} gerando o erro: ${err}`);
            throw err;
        }
    }
}