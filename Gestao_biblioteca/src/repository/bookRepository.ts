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
    };
}