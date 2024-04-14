import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;
        const found = this.productRepository.productList.find((product) => product.description === description);
        if(!name || !description || !price){
            throw new Error("Informações incompletas");
        } else {
            if(found){
                throw new Error("Produto já existente");
            }
        }

        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id?: any, name?: any): Product|undefined{
        const idNumber: number = parseInt(id, 10);
        console.log(id)
        console.log(name)
        return this.productRepository.filtraProduto(idNumber, name);
    }

    getProducts(ordem:any):Product[]{
        if(!ordem){
            throw new Error("Informe a ordem que deseja exibir os produtos");
        } else {
            if(ordem === "Crescente")
                return this.productRepository.productList.sort((a, b) => a.price - b.price)
            else
                return this.productRepository.productList.sort((a,b)=> b.price - a.price)
        }
    } 
}