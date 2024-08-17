import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/entity/livro";

export class LivroRepository {
    
    private static instance: LivroRepository;

    private constructor(){
        this.createTable();
    }

    public static getInstance(): LivroRepository {
        if(!this.instance){
            this.instance = new LivroRepository();
        }
        return this.instance;
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Livro
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            autor VARCHAR(255) NOT NULL,
            categoriaId INT NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereLivro(livro: Livro): Promise<Livro>{
        const query = "INSERT INTO biblioteca.Livro(titulo, autor, categoriaId) VALUES (?,?,?)";

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaId]);
            console.log('Livro cadastrado com sucesso!');
            livro.id = resultado.insertId;
            return new Promise<Livro>((resolve)=> {
                resolve(livro);
            })
        } catch (err:any) {
            console.error('Erro ao cadastrar Usuario: ', err);
            throw err;
        }
    }

    async atualizaLivro(livro: Livro): Promise<Livro>{
        const query = "UPDATE biblioteca.Livro set titulo = ?, autor = ?, categoriaId = ? where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [livro.titulo, livro.autor, livro.categoriaId, livro.id]);
            console.log('Livro atualizado com sucesso!');
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletaLivro(livro: Livro): Promise<Livro> {
        const query = "DELETE FROM biblioteca.Livro where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [livro.id]);
            console.log('Livro deletado com sucesso: ', livro);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${livro.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async confirmaLivroById(id: number, titulo?:string, autor?:string, categoriaId?:number):Promise<Livro[]>{
        let query = "SELECT * FROM biblioteca.Livro where id = ? and ";

        const params: any[] = [];

        if(titulo) {
            query += "titulo = ?";
            params.push(titulo);
        }

        if(autor) {
            query += "autor = ?";
            params.push(autor);
        }

        if(categoriaId) {
            query += "categoriaId = ?";
            params.push(categoriaId);
        }
        
        try {
            const resultado = await executarComandoSQL(query, [id, params]);
            console.log('Busca afetuada com sucesso: ', resultado);
            return resultado;
          
        } catch (err:any){
            console.error(`Falha ao procurar livro gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtraLivro(id?:number, categoriaId?:number):Promise<Livro[]>{
        let query = "SELECT * FROM biblioteca.Livro where ";

        const params: any[] = [];

        if(id) {
            query += "id = ?";
            params.push(id);
        }

        if(categoriaId) {
            query += "categoriaId = ?";
            params.push(categoriaId);
        }

        try {
            const resultado = await executarComandoSQL(query, [params]);
            console.log('Livro localizado com sucesso, ID: ', resultado);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao procurar Livro gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarLivros():Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.Livro";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.log('Falha ao listar livros cadastradas!');
            throw err;
        }
    }
}