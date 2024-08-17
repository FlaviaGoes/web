import { verificaFormatoData, stringParaData, calculaDateDevolucao } from "../../util/DataUtil";

verificaFormatoData

export class Emprestimo {
    id: number;
    livroId: number;
    usuarioId: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    constructor(id?:number, livroId?:number, usuarioId?:number, dataEmprestimo?:string, dataDevolucao?: string) {
        this.validateInfo(livroId, usuarioId, dataEmprestimo);
        this.id = id || 0;
        this.livroId = livroId || 0;
        this.usuarioId = usuarioId || 0;
        this.dataEmprestimo = stringParaData(dataEmprestimo || '');
        this.dataDevolucao = calculaDateDevolucao(dataDevolucao || '');
    }

    private validateInfo(livroId:any, usuarioId:any, dataEmprestimo:any){
        let error ='';
        if (typeof livroId !== 'number' || typeof usuarioId !== 'number' || typeof dataEmprestimo !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(!verificaFormatoData(dataEmprestimo)){
            error += ("A data do Emprestimo deve possuir o formato: dd/MM/yyyy");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}