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
        const query =`INSERT INTO Biblioteca.livros (title, author, isbn) VALUES (?, ?, ?) ;` 

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

    async search(id_Isbn: string | number): Promise<boolean> {
        let query: string;
        if(typeof id_Isbn === "string"){
            query = "SELECT * FROM Biblioteca.livros WHERE isbn = ?";
        } else {
            query = "SELECT * FROM Biblioteca.livros WHERE id = ?" ;
        }
    
        try {
            const result = await executarComandoSQL(query, [id_Isbn]);
            if (result.length > 0) {
                return true;
            } else {
                return false;
            }
        } catch (err: any) {
            console.error(`Falha ao procurar o ISBN/ID ${id_Isbn}, gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterbook():Promise<Book[]>{
        const query = "SELECT * FROM Biblioteca.livros";

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
        const query = "SELECT * FROM Biblioteca.livros where id = ?";

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

    async deleteBook(id: number, title: string, author: string, isbn: string):Promise<Book>{
        const query = `DELETE FROM Biblioteca.livros where id = ?`

            try{
                    const result = await executarComandoSQL(query, [id]);
                    console.log('Livro deletado com sucesso, ID: ', result);
                    const book = new Book(id, title, author, isbn);
                    return new Promise<Book>((resolve)=>{
                        resolve(book);
                    })
            } catch (err:any) {
                console.error(`Erro ao deletar o livro de ID ${id}`);
                throw err;
            }
    }
}