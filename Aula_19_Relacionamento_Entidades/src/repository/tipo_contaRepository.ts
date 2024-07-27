import { executarComandoSQL } from "../database/mysql"
import { TipoConta } from "../model/TipoConta";

export class tipo_conta {

    constructor(){
        this.createTableTipo();
    }

    private async createTableTipo() {
        const query = `
        CREATE TABLE tiposConta (
            id INT PRIMARY KEY,
            descricao VARCHAR (255),
            codigoTipoConta INT(10) UNIQUE
        )`;

        try {
            const resultado = await executarComandoSQL(query, [])
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertContaTipo(descricao:string):Promise<TipoConta>{
        const query = `INSERT INTO banco.tiposConta(descricao, codigoTipoConta) VALUES (?, ?)`

        try{
            const tipoConta = new TipoConta(undefined, descricao, undefined);
            const resultado = await executarComandoSQL(query, [tipoConta.descricao, tipoConta.codigoTipoConta]);
            console.log('Tipo Conta foi inserido com sucesso, ID:', resultado.insertId);
            tipoConta.id = resultado.insertId;
            return new Promise<TipoConta>((resolve)=>{
                resolve(tipoConta);
            })
        } catch (err){
            console.error('Erro ao inserir Tipo Conta', err);
            throw err;
        }
    }

    async filterContaTipos():Promise<TipoConta[]>{
        const query = 'SELECT * FROM banco.tiposConta';

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<TipoConta[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao buscar Tipos Conta: ${err}`);
            throw err;
        }
    }

    async filterTipoConta(id: number): Promise<TipoConta>{
        const query = "SELECT * FROM banco.tiposConta where id = ?";

        try{
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Tipo Conta localizado com sucesso!', resultado);
            return new Promise<TipoConta>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao localizar Tipo Conta com ID: ${id}`);
            throw err;
            
        }
    }

    async atualizaTipoConta(id:number, descricao:string, codigoTipoConta:number): Promise<TipoConta>{
        const query = "UPDATE banco.tiposConta set descricao = ?, codigoTipoConta = ?";

        try{
            const resultado = await executarComandoSQL(query, [descricao, codigoTipoConta]);
            console.log('Tipo Conta atualizada com sucesso!', resultado);
            const tipoConta = new TipoConta(id, descricao, codigoTipoConta);
            return new Promise<TipoConta>((resolve)=>{
                resolve(tipoConta)
            })
        } catch (err:any){
            console.error(`Erro ao atualizar Tipo Conta de ID ${id}`)
            throw err;
        }
    }

    async deletaTipoConta(id:number, descricao:string, codigoTipoConta:number){
        const query = `DELETE FROM banco.tiposConta where id = ?`;

        try{
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Conta deletada com sucesso!', resultado);
            const tipoConta = new TipoConta(id, descricao, codigoTipoConta);
            return new Promise<TipoConta>((resolve)=>{
                resolve(tipoConta);
            })
        } catch(err:any){
            console.log(`Erro ao deletar Tipo Conta de ID: ${id}`);
            throw err;
        }
    }
}