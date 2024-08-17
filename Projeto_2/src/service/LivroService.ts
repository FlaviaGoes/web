import { Livro } from "../model/entity/livro";
import { LivroRepository } from "../repository/LivroRepository";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class LivroService {
    private LivroRepository = LivroRepository.getInstance();
    private CategoriaRepository = CategoriaRepository.getInstance();

    async cadastrarLivro(livroData: any):Promise<Livro>{

        const {titulo, autor, categoriaId} = livroData;
        
        const livro = new Livro(undefined, titulo, autor, categoriaId);

        let categoriaExiste = await this.CategoriaRepository.filtraCategoriaById(livro.categoriaId, undefined);

        if(categoriaExiste.length == 0){
            throw new Error("Categoria informada não encontrada");
        }

        const novoLivro = await this.LivroRepository.insereLivro(livro)
        console.log("Cadastrado:", novoLivro);
        return novoLivro;
    }

    async atualizaLivro(livroData: any):Promise<Livro> {
        const {id, autor, titulo, categoriaId} = livroData;
        const idNumber = parseInt(id, 10);

        const livro = new Livro(idNumber, titulo, autor, categoriaId);

        let livroExiste = await this.LivroRepository.filtraLivro(livro.id);
        if(livroExiste.length == 0){
            throw new Error("Id não encontrado");
        }

        let categoriaExiste = await this.CategoriaRepository.filtraCategoriaById(livro.categoriaId, undefined)
        if(categoriaExiste.length == 0){
            throw new Error("Categoria incorreta.");
        }

        await this.LivroRepository.atualizaLivro(livro);
        console.log("Atualizado: ", livro);
        return livro;
    }

    async deletaLivro(livroData:any):Promise<Livro>{
        const{id, titulo, autor, categoriaId} = livroData;
        const idNumber = parseInt(id, 10);

        const livro = new Livro(idNumber, titulo, autor, categoriaId);

        let livroExiste = await this.LivroRepository.filtraLivro(livro.id)

        if(livroExiste.length == 0){
            throw new Error("Livro não existe!");
        }

        livroExiste = await this.LivroRepository.confirmaLivroById(livro.id, livro.titulo)

        if(livroExiste.length == 0) {
            throw new Error("Titulo incorreto");
        }

        livroExiste = await this.LivroRepository.confirmaLivroById(livro.id, undefined, livro.autor)

        if(livroExiste.length == 0){
            throw new Error("Autor incorreto");
        }

        livroExiste = await this.LivroRepository.confirmaLivroById(livro.id, undefined, undefined, livro.categoriaId)

        if(livroExiste.length == 0) {
            throw new Error("Categoria incorreta!");
        }

        await this.LivroRepository.deletaLivro(livro);
        console.log("Deletado: ", livro);
        return livro;
    }

    async filtraLivro(usuarioData: any):Promise<Livro[]>{
        const id = parseInt(usuarioData, 10);

        const livro = await this.LivroRepository.filtraLivro(id);

        if(livro.length == 0){
            throw new Error("Livro informado não encontrado!");
        }

        console.log("Filtrado: ", livro);
        return livro;
    }

    async filtrarLivros():Promise<Livro[]> {
        const livros = await this.LivroRepository.filtrarLivros();
        console.log("Filtrados: ", livros);
        return livros;
    }
}