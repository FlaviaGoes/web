import { Emprestimo } from "../model/entity/emprestimo";
import { EmprestimoRepository } from "../repository/EmprestimoRepository";
import { LivroRepository } from "../repository/LivroRepository";
import { UsuarioRepository } from "../repository/UsuarioRepository";

export class EmprestimoService {
    private EmprestimoRepository = EmprestimoRepository.getInstance();
    private LivroRepository = LivroRepository.getInstance();
    private UsuarioRepository = UsuarioRepository.getInstance();

    async registraEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;
        
        const emprestimo = new Emprestimo(undefined, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        const livroExiste = await this.LivroRepository.filtraLivro(emprestimo.livroId)

        if(livroExiste.length == 0){
            throw new Error("Livro não encontrado no repositório");
        }

        const usuarioExiste = await this.UsuarioRepository.filtrarUsuarioById(emprestimo.usuarioId);

        if(usuarioExiste.length == 0){
            throw new Error("Usuario não cadastrado");
        }

        const novoEmprestimo = await this.EmprestimoRepository.registraEmprestimo(emprestimo);
        console.log("Cadastrado:", novoEmprestimo);
        return novoEmprestimo;
    }

    async atualizaEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {id, livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;

        const emprestimo = new Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        let emprestimoExiste = await this.EmprestimoRepository.filtraEmprestimo(emprestimo.id)

        if(emprestimoExiste.length == 0){
            throw new Error("Emprestimo não encontrado!");
        }

        const livroExiste = await this.LivroRepository.filtraLivro(emprestimo.livroId)

        if(livroExiste.length == 0){
            throw new Error("Livro não encontrado no repositório");
        }

        const usuarioExiste = await this.UsuarioRepository.filtrarUsuarioById(emprestimo.usuarioId);

        if(usuarioExiste.length == 0){
            throw new Error("Usuario não cadastrado");
        }

        await this.EmprestimoRepository.atualizaEmprestimo(emprestimo)
        console.log("Atualizado:", emprestimo);
        return emprestimo;
    }

    async deletaEmprestimo(emprestimoData: any):Promise<Emprestimo>{
        const {id, livroId, usuarioId, dataEmprestimo, dataDevolucao} = emprestimoData;

        const emprestimo = new Emprestimo(id, livroId, usuarioId, dataEmprestimo, dataDevolucao);

        let emprestimoExiste = await this.EmprestimoRepository.filtraEmprestimo(emprestimo.id)

        if(emprestimoExiste.length == 0){
            throw new Error("Emprestimo não encontrado!");
        }

        emprestimoExiste = await this.EmprestimoRepository.confirmaEmprestimoById(emprestimo.id, emprestimo.livroId)

        if(emprestimoExiste.length == 0){
            throw new Error("Confira os dados do livro informado");
        }

        emprestimoExiste = await this.EmprestimoRepository.confirmaEmprestimoById(emprestimo.id, undefined, emprestimo.usuarioId)

        if(emprestimoExiste.length == 0){
            throw new Error("Confira os dados do usuario informado");
        }

        await this.EmprestimoRepository.deletaEmprestimo(emprestimo)
        console.log("Deletado: ", emprestimo);
        return emprestimo;
    }

    async filtraEmprestimo(emprestimoData: any):Promise<Emprestimo[]>{
        const id = parseInt(emprestimoData, 10);

        const emprestimo = await this.EmprestimoRepository.filtraEmprestimo(id);

        if(emprestimo.length == 0){
            throw new Error("Emprestimo não encontrado!");
        }

        console.log("Filtrado: ", emprestimo);
        return emprestimo;
    }

    async filtrarEmprestimos():Promise<Emprestimo[]> {
        const emprestimos = await this.EmprestimoRepository.filtrarEmprestimos();
        console.log("Filtrados: ", emprestimos);
        return emprestimos;
    }
}