"use strict";
/*
Lista de Exercícios Funções

    Exercício 2

    Escreva uma função em TypeScript que calcule a média ponderada de um
    conjunto de valores, dados seus valores e pesos correspondentes.

*/
function mediaPond(p1, p2, p3) {
    let ponderada = (p1.y + p2.y + p3.y);
    let soma = ((p1.x * p1.y) + (p2.x * p2.y) + (p3.x * p3.y));
    return soma / ponderada;
}
let ponto_1 = { x: 1, y: 5 };
let ponto_2 = { x: 10, y: 5 };
let ponto_3 = { x: 8, y: 5 };
console.log(mediaPond(ponto_1, ponto_2, ponto_3));
