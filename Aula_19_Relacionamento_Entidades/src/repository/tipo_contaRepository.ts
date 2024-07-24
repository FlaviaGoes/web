import { executarComandoSQL } from "../database/mysql"
import { Conta } from "../model/Conta"

export class tipo_conta {

    constructor(){
        this.createTableTipo();
    }

    private async createTableTipo() {
        const query = `
        CREATE TABLE tipos_conta (
            id INT PRIMARY KEY,
            descricao VARCHAR (255),
            codigo_tipo_conta VARCHAR (50) UNIQUE
        )`;

        try {
            const resultado = await executarComandoSQL(query, [])
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    } 
}