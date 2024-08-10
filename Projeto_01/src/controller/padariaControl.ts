import {Request, Response} from "express";
import {ServicePadoca, ServiceEstoque, ServiceVenda} from "../service/PadariaServices";

const ModalidadeService = new ServicePadoca();
const EstoqueService = new ServiceEstoque(ModalidadeService);
const VendaService = new ServiceVenda(ModalidadeService, EstoqueService);

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
        res.status(404).json({message:error.message});
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

export function cadastroEstoque(req: Request, res: Response){
    try {
        const newEstoque = EstoqueService.cadastrarEstoque(req.body);
        res.status(201).json(
            {
                mensagem: "Estoque Cadastrado com sucesso!",
                Estoque: newEstoque
            }
        );
    }catch (error: any) {
        res.status(400).json({message:error.message})
    }
};

export function listaEstoque (req: Request, res: Response){
    const listaEstoques = EstoqueService.novoEstoque.TodoEstoque();
    res.status(200).json({
        mensagem: "Estoques Disponíveis:",
        Estoques: listaEstoques
    });
};

export function buscaEstoque (req: Request, res: Response){
    try {
        const Estoque = EstoqueService.filtrarEstoque(req.query.id);
        if(Estoque){
            res.status(200).json(
                {
                    mensagem: "O estoque existe!",
                    Estoque : Estoque
                }
            )
        }
    } catch (error:any) {
        res.status(404).json({message:error.message});
    };
};

export function Adicionarestoque (req: Request, res: Response){
    try{
        const EstoqueModificado = EstoqueService.adicionaEstoque(req.body);
        if(EstoqueModificado){
            res.status(200).json(
                {
                    mensagem: "Estoque modificado!",
                    Estoque: EstoqueModificado
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    }
};

export function removerEstoque (req: Request, res: Response){
    try{
        const Estoque = EstoqueService.removerEstoque(req.body);
        if(Estoque){
            res.status(200).json(
                {
                    mensagem: "Remoção realizada com Sucesso!",
                    Estoque: Estoque
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    }
};

export function registrarVenda (req: Request, res: Response){
    try{
        const Venda = VendaService.registroVenda(req.body)
        if(Venda){
            res.status(200).json(
                {
                    mensagem: "Registro Realizado!",
                    Venda: Venda
                }
            )
        }
    } catch (error:any) {
        res.status(400).json({message:error.message});
    }
};

export function buscaVenda (req: Request, res: Response){
    try {
        const Venda = VendaService.filtraVenda(req.query.id)
        if(Venda){
            res.status(200).json(
                {
                    mensagem: "Venda encontrada!",
                    Venda : Venda
                }
            )
        }
    } catch (error:any) {
        res.status(404).json({message:error.message});
    };
};
