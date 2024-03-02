"use strict";
/*
Lista de Exercícios Funções

    Exercício 2

    Desenvolva uma função que receba um número como parâmetro e verifique se
    ele é par ou ímpar. Retorne true se for par e false se for ímpar.

*/
function ImparPar(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}
console.log(ImparPar(5));
