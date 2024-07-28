import { TipoConta } from "../model/TipoConta";
import { tipo_conta } from "../repository/tipo_contaRepository";

export class tipoContaService {
    TipoContaRepository: tipo_conta = new tipo_conta();

    async procuraTipoConta(id: string | number):Promise<Boolean>{
        let query: string;

        if(typeof id === "string"){
            query = "SELECT * FROM banco.tiposConta WHERE descricao = ?";
        } else {
            query = "SELECT * FROM banco.tiposConta WHERE codigoTipoConta = ?" ;
        }
        
        const result = await this.TipoContaRepository.searchTipoConta(query, id);

        if (result > 0) {
            return true;
        } else {
            return false;
        }
    }

    async criaTipoConta(tipoData: any): Promise<TipoConta>{
        const { descricao } = tipoData;

        if(!descricao){
            throw new Error("Informações incompletas");
        }

        const result = await this.procuraTipoConta(descricao.toLowerCase())

        if(result === true){
            throw new Error("Esse tipo já foi cadastrado!");
        }

        const tipoConta = await this.TipoContaRepository.insertContaTipo(descricao.toLowerCase());
        console.log("Tipo Conta: ", tipoConta);
        return tipoConta;
    }

    async atualizaTipoConta(tipoData:any): Promise<TipoConta> {
        const {id, descricao, codigoTipoConta} = tipoData

        if(!id || !descricao || !codigoTipoConta){
            throw new Error("Informações incompletas");
        }

        const ID = parseInt(id, 10);
        const desc = descricao.toString();
        const codigo = parseInt(codigoTipoConta, 10)

        const tipoConta = await this.TipoContaRepository.atualizaTipoConta(ID, desc, codigo)
        console.log('Tipo Conta atualizada com sucesso!');
        return tipoConta;
    }

    async deletaTipoConta(tipoData: any):Promise<TipoConta>{
        const {id, descricao, codigoTipoConta} = tipoData;

        if(!id || !descricao || !codigoTipoConta){
            throw new Error("Informações incompletas");
        }

        const ID = parseInt(id, 10);
        const desc = descricao.toString();
        const codigo = parseInt(codigoTipoConta, 10)

        const tipoConta = await this.TipoContaRepository.deletaTipoConta(ID, desc, codigo)
        console.log('Tipo Conta deletado com sucesso!');
        return tipoConta;
    }

    async getTipoConta(id:any, descricao:any, codigoTipoConta:any): Promise<TipoConta>{
        if(!id || !descricao || !codigoTipoConta){
            throw new Error("Informações incompletas");  
        }

        const ID = parseInt(id, 10);
        const desc = descricao.toString();
        const codigo = parseInt(codigoTipoConta, 10);
        
        const tipoConta = await this.TipoContaRepository.filterTipoConta(ID, desc, codigo);
        console.log("Tipo Conta encontrado com sucesso!")
        return tipoConta;
    }

    async getTiposConta():Promise<TipoConta[]>{
        const TipoContas = await this.TipoContaRepository.filterContaTipos();
        console.log("Tipos de coonta:", TipoContas);
        return TipoContas;
    }
}