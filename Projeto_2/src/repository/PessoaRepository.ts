import { executarComandoSQL } from "../database/mysql";
import { Pessoa } from "../model/pessoa";

export class PessoaRepository {

    private static instance: PessoaRepository;

    private constructor(){
        this.createTable();
    }

    public static getInstance(): PessoaRepository {
        if(!this.instance){
            this.instance = new PessoaRepository();
        }
        return this.instance;
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.pessoa
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }
}