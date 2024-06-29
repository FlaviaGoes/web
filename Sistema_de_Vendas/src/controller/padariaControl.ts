import {Request, Response} from "express";
import {ServicePadoca} from "../service/PadariaServices";

const ModalidadeService = new ServicePadoca();

export function cadastrarModal(req: Request, res: Response){
    try {
        const novaModalidade = ModalidadeService.cadastrarModalidade(req.body);
        res.status(201).json(
            {
                mensagem: "Modalidade Adicionada com sucesso!",
                modalidade:novaModalidade
            }
        );
    }catch (error: any) {
        res.status(400).json({message:error.message})
    }
};