"use strict";
/*
Lista de Exercícios Funções

    Exercício 5

    Desenvolva uma função que determine se um número é primo ou não. Retorne
    true se for primo e false se não for.

*/
function NumPrimo(val) {
    let cont = 0;
    for (let i = 0; i <= val; i++) {
        if (val % i == 0)
            cont++;
    }
    if (val == 1)
        return false;
    if (cont == 2)
        return true;
    else
        return false;
}
console.log(NumPrimo(10));
