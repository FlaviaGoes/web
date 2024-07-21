import { Request, Response } from "express";
import { ServiceBook } from "../service/bookService";

const bookService = new ServiceBook();

export async function InsertBook(req: Request, res: Response) {
    try {
        const book = await bookService.bookInsert(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                Livro: book
            }
        );
    } catch (error: any) {
        res.status(409).json(
            { 
                message: "Isbn duplicado!",
            });
    }
}

export async function allBooks(req: Request, res: Response) {
    try {
        const books = await bookService.imprimirBooks();
        res.status(200).json(
            {
                mensagem:"Livros listados com sucesso!",
                Livros: books
            }
        );
    } catch (error: any){
        res.status(400).json({ message: error.message});
    }  
}

export async function bookById(req: Request, res: Response) {
    try {
        const book = await bookService.IdBook(req.query.id);
        res.status(200).json({
            mensagem:"Livro encontrado!",
            Livro: book
        })
    } catch (error: any){
        res.status(404).json({message:error.message});
    }
}

export async function atulizaLivro(req: Request, res: Response) {
    try{
        const book = await bookService.atualizaBook(req.body);
        res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                Livro: book
            }
        );
    } catch (error: any){
        res.status(404).json({message:"Livro não encontrado!"});
    }
}

export async function deletaBook(req: Request, res: Response) {
    try {
        const book = await bookService.removeLivro(req.body);
        res.status(200).json({
            mensagem : "Livro deletado!",
            Livro: book
        }) 
    } catch (error: any){
        res.status(404).json({message:error.message});
    }
}

