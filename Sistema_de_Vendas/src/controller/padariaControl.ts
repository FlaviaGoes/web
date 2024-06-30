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

export function listaModalidades (req: Request, res: Response){
    const Modalidades = ModalidadeService.ModalidadePadoca.filtraModalidades();
    res.status(200).json({
        mensagem: "Modalidades disponíveis:",
        Modalidades : Modalidades
    });
};

export function pesquisaModalidade (req: Request, res: Response){
    try {
        const modal = ModalidadeService.consultarModalidade(req.query.id);
        if(modal){
            res.status(200).json(
                {
                    mensagem: "Modalidade encontrada!",
                    Modalidade : modal
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    };
};

export function mudarModalidade (req: Request, res: Response){
    try{
        const modal = ModalidadeService.modificarModalidade(req.body);
        if(modal){
            res.status(200).json(
                {
                    mensagem: "Modalidade Modificada!",
                    Modalidade: modal
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    }
};

export function excluirModalidade (req: Request, res: Response){
    try{
        const index = ModalidadeService.excluirModalidade(req.body);
        if(index){
            res.status(202).json(
                {
                    mensagem: "Modalidade Excluida com Sucesso!",
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    }
};

