import { TipoConta } from "../model/TipoConta";
import { tipo_conta } from "../repository/tipo_contaRepository";

export class tipoContaService {
    TipoContaRepository: tipo_conta = new tipo_conta();

    async criaTipoConta(tipoData: any): Promise<TipoConta>{
        const { descricao } = tipoData;
        if(!descricao){
            throw new Error("Informações incompletas");
        }

        const tipoConta = await this.TipoContaRepository.insertContaTipo(descricao);
        console.log("Tipo Conta: ", tipoConta);
        return tipoConta;
    }
}