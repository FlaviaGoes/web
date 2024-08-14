import { Emprestimo } from "../model/entity/emprestimo";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";

export class EmprestimoService {
    private EmprestimoRepository = EmprestimoRepository.getInstance();

    async registraEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;
        
        const emprestimo = new Emprestimo(undefined, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        const novoEmprestimo = await this.EmprestimoRepository.registraEmprestimo(emprestimo);
        console.log("Cadastrado:", novoEmprestimo);
        return novoEmprestimo;
    }

    async atualizaEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {id, livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;

        const emprestimo = new Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        await this.EmprestimoRepository.atualizaEmprestimo(emprestimo)
        console.log("Atualizado:", emprestimo);
        return emprestimo;
    }

    async deletaEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {id, livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;

        const emprestimo = new Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        await this.EmprestimoRepository.deletaEmprestimo(emprestimo)
        console.log("Deletado: ", emprestimo);
        return emprestimo;
    }

    async filtraEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const id = parseInt(emprestimoData, 10);

        const emprestimo = await this.EmprestimoRepository.filtraEmprestimo(id);
        console.log("Filtrado: ", emprestimo);
        return emprestimo;
    }

    async filtrarEmprestimos():Promise<Emprestimo[]> {
        const emprestimos = await this.EmprestimoRepository.filtrarEmprestimos();
        console.log("Filtrados: ", emprestimos);
        return emprestimos;
    }
}