"use strict";
/*
Lista de Exercícios Funções

    Exercício 1

    Escreva uma função em TypeScript que aceite um array de números como
    parâmetro e retorne o array ordenado em ordem crescente.

*/
function ordemCrescente(...valores) {
    return valores.sort();
}
console.log(ordemCrescente(9, 3, 5, 1, 8, 4));
