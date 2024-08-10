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
        CREATE TABLE IF NOT EXISTS Biblioteca.Pessoa
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

    async inserePessoa(pessoa: Pessoa) : Promise<Pessoa> {
        const query = "INSERT INTO Biblioteca.Pessoa(name, email) VALUES (?,?)";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.name, pessoa.email]);
            console.log('Pessoa cadastrada com sucesso!');
            pessoa.id = resultado.insertId;
            return new Promise<Pessoa>((resolve)=> {
                resolve(pessoa);
            })
        } catch (err) {
            console.error('Erro ao cadastrar Pessoa:', err);
            throw err;
        }
    }
}