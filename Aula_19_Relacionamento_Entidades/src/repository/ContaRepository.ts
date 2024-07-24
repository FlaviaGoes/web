import { executarComandoSQL } from "../database/mysql"
import { Conta } from "../model/Conta"

export class ContaRepository {
    
    constructor(){
        this.createTableConta();
    }

    private async createTableConta() {
        const query = `
        CREATE TABLE Contas (
            id INT PRIMARY KEY,
            numero_conta VARCHAR (20),
            saldo DECIMAL (10, 2),
            codigo_tipo_conta VARCHAR (50),
            FOREIGN KEY (codigo_tipo_conta) REFERENCES tipos_conta (codigo_tipo_conta)
            ON UPDATE CASCADE
        )`

        try{
            const resultado = await executarComandoSQL(query, [])
            console.log('Query executada com sucesso:', resultado);
        }catch (err){
            console.error('Error');
        }
    }

    async InsertConta(numero_conta: string, saldo: number, codigo_tipo_conta: number): Promise<Conta>{
        const query = 'INSERT INTO  banco.Contas (numero_conta, saldo, codigo_tipo_conta) VALUES (?, ?, ?)';

        try {
            const resultado = await executarComandoSQL(query, [numero_conta, saldo, codigo_tipo_conta]);
            console.log('Conta criada com sucesso, ID: ', resultado.insertId);
            const conta = new Conta(resultado.insertId, numero_conta, saldo, codigo_tipo_conta);
            return new Promise<Conta>((resolve)=>{
                resolve(conta);
            })
        } catch (err:any) {
            console.error(`Erro ao criar conta:`, err);
            throw err;
        } 
    }
}
