import { verificaFormatoEmail } from "../util/DataUtil";

export class Pessoa {
    id: number;
    name: string;
    email: string;

    constructor(id?:number, name?:string, email?:string) {
        this.ValidateInfo(id, name, email);
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
    }

    private ValidateInfo(id: any, name:any, email:any) {
        let error = '';
        if (typeof id !== 'number' || typeof name !== 'string' || typeof email !== 'string') {
            error += ("Informações incorretas. ");
        }

        if(!verificaFormatoEmail(email)) {
            error += ('O email deve possuir o formato correto!');
        }

        if(error != '') {
            throw new Error(error);
        }
    }
}