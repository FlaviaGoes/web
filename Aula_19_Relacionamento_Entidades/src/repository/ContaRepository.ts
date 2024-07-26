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

    async filterContas():Promise<Conta[]>{
        const query = "SELECT * FROM banco.Contas";

        try{
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Conta[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao buscar contas: ${err}`);
            throw err;
        }
    }

    async filterContaID (id: number) : Promise<Conta> {
        const query = "SELECT * FROM banco.Contas where id = ?";

        try{
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Conta localizada com sucesso!', resultado);
            return new Promise<Conta>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Falha ao localizar conta com ID: ${id}`);
            throw err;
        }
    }

    async atualizaConta(id:number, numeroConta:string, saldo:number, tipoConta:number):Promise<Conta>{
        const query = "UPDATE banco.Contas set numeroConta = ?, saldo = ?, tipoConta = ? where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [numeroConta, saldo, tipoConta, id]);
            console.log('Conta atuallizada com sucesso!', resultado);
            const conta = new Conta(id, numeroConta, saldo, tipoConta);
            return new Promise<Conta>((resolve)=>{
                resolve(conta)
            })
        } catch (err:any){
            console.error(`Erro ao atualizar a Conta de ID ${id}.`);
            throw err;
        }
    }

    async deletaConta(id:number, numeroConta:string, saldo:number, tipoConta:number):Promise<Conta>{
        const query = `DELETE FROM banco.Contas where id = ?`;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Conta deletada com sucesso!', resultado);
            const conta = new Conta(id, numeroConta, saldo, tipoConta);
            return new Promise<Conta>((resolve)=>{
                resolve(conta);
            })
        } catch (err:any) {
            console.error(`Erro ao deletar a Conta de ID: ${id}`);
            throw err;
        }
    }
}
