import { executarComandoSQL } from "../database/mysql"
import { TipoConta } from "../model/TipoConta";

export class tipo_conta {

    constructor(){
        this.createTableTipo();
    }

    private async createTableTipo() {
        const query = `
        CREATE TABLE tipos_Conta (
            id INT PRIMARY KEY,
            descricao VARCHAR (255),
            codigo_tipo_conta INT(10) UNIQUE
        )`;

        try {
            const resultado = await executarComandoSQL(query, [])
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertContaTipo(descricao:string, codigo_tipo_conta:number):Promise<TipoConta>{
        const query = `INSERT INTO banco.tipos_Conta(descricao, codigo_tipo_conta) VALUES (?, ?)`

        try{
            const resultado = await executarComandoSQL(query, [descricao, codigo_tipo_conta]);
            console.log('Tipo Conta foi inserido com sucesso, ID:', resultado.insertId);
            const conta_tipo = new TipoConta(resultado.insertId, descricao, codigo_tipo_conta)
            return new Promise<TipoConta>((resolve)=>{
                resolve(conta_tipo);
            })
        } catch (err){
            console.error('Erro ao inserir Tipo COnta', err);
            throw err;
        }
    }
}