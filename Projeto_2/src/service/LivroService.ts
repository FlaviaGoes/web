import { Livro } from "../model/entity/livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroService {
    private LivroRepository = LivroRepository.getInstance();

    async cadastrarLivro(livroData: any):Promise<Livro>{

        const {titulo, autor, categoriaId} = livroData;
        
        const livro = new Livro(undefined, titulo, autor, categoriaId);

        const novoLivro = await this.LivroRepository.insereLivro(livro)
        console.log("Cadastrado:", novoLivro);
        return novoLivro;
    }

    async atualizaLivro(livroData: any):Promise<Livro> {
        const {id, autor, titulo, categoriaId} = livroData;

        const livro = new Livro(id, autor, titulo, categoriaId);

        await this.LivroRepository.atualizaLivro(livro);
        console.log("Atualizado: ", livro);
        return livro;
    }

    async deletaLivro(livroData:any):Promise<Livro>{
        const{id, titulo, autor, categoriaId} = livroData;

        const livro = new Livro(id, titulo, autor, categoriaId);
        await this.LivroRepository.deletaLivro(livro);
        console.log("Deletado: ", livro);
        return livro;
    }

    async filtraLivro(usuarioData: any):Promise<Livro>{
        const id = parseInt(usuarioData, 10);

        const livro = await this.LivroRepository.filtraLivro(id);
        console.log("Filtrado: ", livro);
        return livro;
    }

    async filtrarLivros():Promise<Livro[]> {
        const livros = await this.LivroRepository.filtrarLivros();
        console.log("Filtrados: ", livros);
        return livros;
    }
}