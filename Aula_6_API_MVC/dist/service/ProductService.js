"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, price } = produtoData;
        const found = this.productRepository.productList.find((product) => product.description === description);
        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }
        else {
            if (found) {
                throw new Error("Produto já existente");
            }
        }
        const novoProduto = new Product_1.Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, name) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        console.log(name);
        return this.productRepository.filtraProduto(idNumber, name);
    }
    getProducts(ordem) {
        if (!ordem) {
            throw new Error("Informe a ordem que deseja exibir os produtos");
        }
        else {
            if (ordem === "Crescente")
                return this.productRepository.productList.sort((a, b) => a.price - b.price);
            else
                return this.productRepository.productList.sort((a, b) => b.price - a.price);
        }
    }
}
exports.ProductService = ProductService;
