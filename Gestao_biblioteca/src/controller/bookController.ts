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
            res.status(400).json({ message: error.message});
    }
}

