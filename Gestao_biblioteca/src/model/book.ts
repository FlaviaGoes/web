export class Book{
    id: number;
    title: string;
    author: string;

    constructor(id?:number, title?:string, author?:string){
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
    }
}