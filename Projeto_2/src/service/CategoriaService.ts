import { Categoria } from "../model/entity/categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService {
    private CategoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData:any):Promise<Categoria>{
        
        const categoria = new Categoria(undefined, categoriaData);

        let categoriaExiste = await this.CategoriaRepository.filtraCategoriaById(undefined, categoria.name)

        if(categoriaExiste.length > 0){
            throw new Error("Categoria já cadastrada.");
        }

        const novaCategoria = await this.CategoriaRepository.insereCategoria(categoria);
        console.log("Cadastrado: ", novaCategoria);
        return novaCategoria;
    }

    async atualizaCategoria(categoriaData: any):Promise<Categoria>{
        const {id, name} = categoriaData;
        const idNumber = parseInt(id, 10);

        const categoria = new Categoria(idNumber, name);

        let categoriaExiste = await this.CategoriaRepository.filtraCategoriaById(categoria.id, undefined)

        if(categoriaExiste.length == 0){
            throw new Error("Categoria não encontrada.");
        }

        await this.CategoriaRepository.atualizaCategoria(categoria);
        console.log("Atualizada:", categoria);
        return categoria;
    }

    async deletaCategoria(categoriaData: any):Promise<Categoria>{
        const {id, name} = categoriaData;
        const idNumber = parseInt(id, 10);

        const categoria = new Categoria(idNumber, name);

        let categoriaExiste: Categoria[] = await this.CategoriaRepository.confirmaCategoriaById(categoria.id, categoria.name)

        if(categoriaExiste.length == 0){
            throw new Error("Confirme os dados inseridos.");
        }

        await this.CategoriaRepository.deletaCategoria(categoria);
        console.log("Deletada: ", categoria);
        return categoria;
    }

    async filtraCategoria(categoriaData: any):Promise<Categoria[]>{
        const id = parseInt(categoriaData, 10);

        let categoriaExiste = await this.CategoriaRepository.filtraCategoriaById(id, undefined)

        if(categoriaExiste.length == 0){
            throw new Error("Categoria não encontrada.");
        }

        const categoria = await this.CategoriaRepository.filtraCategoriaById(id);
        console.log("Filtrada: ", categoria);
        return categoria;
    }

    async filtrarCategorias():Promise<Categoria[]> {
        const categorias = await this.CategoriaRepository.filtrarCategorias();
        console.log("Filtradas: ", categorias);
        return categorias;
    }
}