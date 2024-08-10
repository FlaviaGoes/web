// Validar senha 

export class Usuario {
    id: number;
    idPessoa : number;
    senha : string;

    constructor(id?:number, idPessoa?:number, senha?:string) {
        this.validateInfo(id, idPessoa, senha)
        this.id = id || 0;
        this.idPessoa = idPessoa || 0;
        this.senha = senha || '';
    }

    private validateInfo(id:any, idPessoa:any, senha:any){
        let error ='';
        if (typeof id !== 'number' || typeof idPessoa !== 'number' || typeof senha !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}

