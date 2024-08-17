import { executarComandoSQL } from "../database/mysql";
import { Emprestimo } from "../model/entity/emprestimo";

export class EmprestimoRepository {

    private static instance: EmprestimoRepository;

    private constructor(){
        this.createTable();
    }

    public static getInstance(): EmprestimoRepository {
        if(!this.instance){
            this.instance = new EmprestimoRepository();
        }
        return this.instance;
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS biblioteca.Emprestimo
        (
            id INT AUTO_INCREMENT PRIMARY KEY,
            livroId INT NOT NULL,
            usuarioId INT NOT NULL,
            dataEmprestimo DATE NOT NULL,
            dataDevolucao DATE NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async registraEmprestimo(emprestimo: Emprestimo): Promise<Emprestimo>{
        const query = "INSERT INTO biblioteca.Emprestimo(livroId, usuarioId, dataEmprestimo, dataDevolucao) VALUES (?,?,?,?)";

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao]);
            console.log('Emprestimo registrado com sucesso!');
            emprestimo.id = resultado.insertId;
            return new Promise<Emprestimo>((resolve)=> {
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error('Erro ao cadastrar Usuario: ', err);
            throw err;
        }
    }

    async atualizaEmprestimo(emprestimo: Emprestimo): Promise<Emprestimo>{
        const query = "UPDATE biblioteca.Emprestimo set livroId = ?, usuarioId = ?, dataEmprestimo = ?, dataDevolucao = ? where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.livroId, emprestimo.usuarioId, emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.id]);
            console.log('Emprestimo atualizado com sucesso!');
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar a Emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletaEmprestimo(emprestimo: Emprestimo): Promise<Emprestimo> {
        const query = "DELETE FROM biblioteca.Emprestimo where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [emprestimo.id]);
            console.log('Usuario deletado com sucesso: ', emprestimo);
            return new Promise<Emprestimo>((resolve)=>{
                resolve(emprestimo);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o Emprestimo de ID ${emprestimo.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async confirmaEmprestimoById(id: number, livroId?:number, usuarioId?:number, dataEmprestimo?:Date, dataDevolucao?:Date):Promise<Emprestimo[]>{
        let query = "SELECT * FROM biblioteca.Emprestimo where id = ? and ";

        const params: any[] = [];

        if(livroId) {
            query += "livroId = ?";
            params.push(livroId);
        }

        if(usuarioId) {
            query += "usuarioId = ?";
            params.push(usuarioId);
        }

        if(dataEmprestimo) {
            query += "dataEmprestimo = ?";
            params.push(dataEmprestimo);
        }

        if(dataDevolucao) {
            query += "dataDevolucao = ?";
            params.push(dataDevolucao);
        }
        
        
        try {
            const resultado = await executarComandoSQL(query, [id, params]);
            console.log('Busca afetuada com sucesso: ', resultado);
            return resultado;
          
        } catch (err:any){
            console.error(`Falha ao procurar Emprestimo gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtraEmprestimo(id?:number, livroId?:number, usuarioId?:number):Promise<Emprestimo[]>{
        let query = "SELECT * FROM biblioteca.Emprestimo where ";

        const params: any[] = [];

        if(id) {
            query += "id = ?";
            params.push(id);
        }

        if(livroId) {
            query += "livroId = ?";
            params.push(livroId);
        }

        if(usuarioId) {
            query += "usuarioId = ?";
            params.push(usuarioId);
        }

        try {
            const resultado = await executarComandoSQL(query, [params]);
            console.log('Emprestimo localizado com sucesso, ID: ', resultado);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao procurar Emprestimo gerando o erro: ${err}`);
            throw err;
        }
    }

    async filtrarEmprestimos():Promise<Emprestimo[]>{
        const query = "SELECT * FROM biblioteca.Emprestimo";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Emprestimo[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.log('Falha ao listar Emprestimos registrados!');
            throw err;
        }
    }

}