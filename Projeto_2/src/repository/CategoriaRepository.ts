import { executarComandoSQL } from "../database/mysql";
import { Categoria } from "../model/entity/categoria";

export class CategoriaRepository {
    
    private static instance: CategoriaRepository;

    private constructor(){
        this.createTable();
    }

    public static getInstance(): CategoriaRepository {
        if(!this.instance){
            this.instance = new CategoriaRepository();
        }
        return this.instance;
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Categoria
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereCategoria(categoria: Categoria): Promise<Categoria>{
        const query = "INSERT INTO biblioteca.Categoria(name) VALUES (?)";

        try {
            const resultado = await executarComandoSQL(query, [categoria.name]);
            console.log('Usuario cadastrado com sucesso!');
            categoria.id = resultado.insertId;
            return new Promise<Categoria>((resolve)=> {
                resolve(categoria);
            })
        } catch (err:any) {
            console.error('Erro ao cadastrar Categoria: ', err);
            throw err;
        }
    }

    async atualizaCategoria(categoria: Categoria): Promise<Categoria>{
        const query = "UPDATE biblioteca.Categoria set name = ? where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [categoria.name, categoria.id]);
            console.log('Categoria atualizada com sucesso!');
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar categoria de ID ${categoria.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletaCategoria(categoria: Categoria): Promise<Categoria> {
        const query = "DELETE FROM biblioteca.Categoria where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [categoria.id]);
            console.log('Categoria deletada com sucesso: ', categoria);
            return new Promise<Categoria>((resolve)=>{
                resolve(categoria);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar categoria de ID ${categoria.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtraCategoriaById(id?:number, name?: string):Promise<Categoria[]>{
        let query = "SELECT * FROM biblioteca.Categoria where ";
        const params: any[] = [];

        if(id) {
            query += "id = ?";
            params.push(id);
        }

        if(name) {
            query += "name = ?";
            params.push(name);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const resultado: Categoria[] = await executarComandoSQL(query, params);
            console.log('Busca afetuada com sucesso: ', resultado);
            return resultado;
          
        } catch (err:any){
            console.error(`Falha ao procurar categoria gerando o erro: ${err}`);
            throw err;
        }
    }

    async confirmaCategoriaById(id: number, name?:string):Promise<Categoria[]>{
        let query = "SELECT * FROM biblioteca.Categoria where id = ? and name = ?";
        
        try {
            const resultado = await executarComandoSQL(query, [id, name]);
            console.log('Busca afetuada com sucesso: ', resultado);
            return resultado;
          
        } catch (err:any){
            console.error(`Falha ao procurar categoria com id ${id} e name ${name} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarCategorias():Promise<Categoria[]>{
        const query = "SELECT * FROM biblioteca.Categoria";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Categoria[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.log('Falha ao listar categorias!');
            throw err;
        }
    }
}