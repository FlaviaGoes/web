import { verificaFormatoData, stringParaData } from "../../util/DataUtil";

verificaFormatoData

export class Emprestimo {
    id: number;
    livroId: number;
    usuarioId: number;
    dataEmprestimo: Date;
    dataDevolucao: Date;

    constructor(id?:number, livroId?:number, usuarioId?:number, dataEmprestimo?:string, dataDevolucao?: string) {
        this.validateInfo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);
        this.id = id || 0;
        this.livroId = livroId || 0;
        this.usuarioId = usuarioId || 0;
        this.dataEmprestimo = stringParaData(dataEmprestimo || '');
        this.dataDevolucao = stringParaData(dataDevolucao || '');
    }

    private validateInfo(id:any, livroId:any, usuarioId:any, dataEmprestimo:any, dataDevolucao: any){
        let error ='';
        if (typeof id !== 'number' || typeof livroId !== 'number' || typeof usuarioId !== 'number' || typeof dataEmprestimo !== 'string' || typeof dataDevolucao !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(!verificaFormatoData(dataEmprestimo)){
            error += ("A data do Emprestimo deve possuir o formato: dd/MM/yyyy");
        }

        if(!verificaFormatoData(dataDevolucao)){
            error += ("A data da Devolução deve possuir o formato: dd/MM/yyyy");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}