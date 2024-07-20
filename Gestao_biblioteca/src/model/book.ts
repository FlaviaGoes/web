export class Book{
    id: number;
    title: string;
    author: string;
    isbn : string;

    constructor(id?:number, title?:string, author?:string, isbn?:string){
        this.id = id || 0;
        this.title = title || '';
        this.author = author || '';
        this.isbn = isbn || '';
    }
}