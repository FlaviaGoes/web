import { Categoria } from "../model/entity/categoria";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaService {
    private CategoriaRepository = CategoriaRepository.getInstance();

    async cadastrarCategoria(categoriaData:any):Promise<Categoria>{
        
        const categoria = new Categoria(undefined, categoriaData);

        const novaCategoria = await this.CategoriaRepository.insereCategoria(categoria);
        console.log("Cadastrado: ", novaCategoria);
        return novaCategoria;
    }

    async atualizaCategoria(categoriaData: any):Promise<Categoria>{
        const {id, name} = categoriaData;

        const categoria = new Categoria(id, name);

        await this.CategoriaRepository.atualizaCategoria(categoria);
        console.log("Atualizada:", categoria);
        return categoria;
    }

    async deletaCategoria(categoriaData: any):Promise<Categoria>{
        const {id, name} = categoriaData;

        const categoria = new Categoria(id, name);

        await this.CategoriaRepository.deletaCategoria(categoria);
        console.log("Deletada: ", categoria);
        return categoria;
    }

    async filtraCategoria(categoriaData: any):Promise<Categoria>{
        const id = parseInt(categoriaData, 10);

        const categoria = await this.CategoriaRepository.filtraCategoria(id);
        console.log("Filtrada: ", categoria);
        return categoria;
    }

    async filtrarCategorias():Promise<Categoria[]> {
        const categorias = await this.CategoriaRepository.filtrarCategorias();
        console.log("Filtradas: ", categorias);
        return categorias;
    }
}