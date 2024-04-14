"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaProdutos = exports.pesquisarProduto = exports.cadastrarProduto = void 0;
const ProductService_1 = require("../service/ProductService");
const productService = new ProductService_1.ProductService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarProduto = cadastrarProduto;
;
function pesquisarProduto(req, res) {
    try {
        const produto = productService.consultarProduto(req.query.id, req.query.name);
        if (produto) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                produto: produto
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarProduto = pesquisarProduto;
;
function listaProdutos(req, res) {
    try {
        res.status(200).json(productService.getProducts(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaProdutos = listaProdutos;
;
