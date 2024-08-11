export class Categoria {
    id: number;
    name: string;

    constructor(id?: number, name?: string) {
        this.validateInfo(id, name);
        this.id = id || 0;
        this.name = name || '';
    }

    private validateInfo(id:any, name:any){
        let error ='';
        if (typeof id !== 'number' || typeof name !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}