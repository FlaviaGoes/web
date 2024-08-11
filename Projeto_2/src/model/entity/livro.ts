export class Livro {
    id: number;
    titulo: string;
    autor: string;
    categoriaId : number;

    constructor(id?: number, titulo?: string, autor?: string, categoriaId?: number){
        this.validateInfo(id, titulo, autor, categoriaId)
        this.id = id || 0;
        this.titulo = titulo || '';
        this.autor = autor || '';
        this.categoriaId = categoriaId || 0;
    }

    private validateInfo(id:any, titulo:any, autor:any, categoriaId:any){
        let error ='';
        if (typeof id !== 'number' || typeof titulo !== 'string' || typeof autor !== 'string' || typeof categoriaId !== 'number') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}