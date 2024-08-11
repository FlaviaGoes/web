import { executarComandoSQL } from "../database/mysql";
import { Pessoa } from "../model/entity/pessoa";

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
        CREATE TABLE IF NOT EXISTS biblioteca.Pessoa
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
        const query = "INSERT INTO biblioteca.Pessoa(name, email) VALUES (?,?)";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.name, pessoa.email]);
            console.log('Pessoa cadastrada com sucesso!');
            pessoa.id = resultado.insertId;
            return new Promise<Pessoa>((resolve)=> {
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error('Erro ao cadastrar Pessoa:', err);
            throw err;
        }
    }

    async atualizaPessoa(pessoa:Pessoa): Promise<Pessoa>{
        const query = "UPDATE biblioteca.Pessoa set name = ?, email = ? where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.name, pessoa.email, pessoa.id]);
            console.log('Pessoa atualizada com sucesso!');
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar a pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletaPessoa(pessoa:Pessoa): Promise<Pessoa> {
        const query = "DELETE FROM biblioteca.Pessoa where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [pessoa.id]);
            console.log('Pessoa deletada com sucesso: ', pessoa);
            return new Promise<Pessoa>((resolve)=>{
                resolve(pessoa);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar a Pessoa de ID ${pessoa.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarPessoa(id: number):Promise<Pessoa>{
        const query = "SELECT * FROM biblioteca.Pessoa where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pessoa localizada com sucesso, ID: ', resultado);
            return new Promise<Pessoa>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao procurar a pessoa gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarPessoas():Promise<Pessoa[]>{
        const query = "SELECT * FROM biblioteca.Pessoa";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Pessoa[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.log('Falha ao listar pessoas cadastradas!');
            throw err;
        }
    }
}