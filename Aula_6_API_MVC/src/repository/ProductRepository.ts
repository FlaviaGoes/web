import { Product } from "../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProduto(id?:number, name?:string): Product|undefined{
        return this.productList.find(product => product.id === id || product.name === name);
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

}