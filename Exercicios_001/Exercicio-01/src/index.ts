/*
Lista de Exercícios Funções

    Exercício 1

    Crie uma função que receba uma lista de números como parâmetro e retorne o
    maior número da lista.

*/

function listaNumerica(...lista : number[]) {
    let maior = 0
    for(let i = 0; i <= lista.length; i++){
        if(lista[maior] < lista[i])
            maior = i;
    }
    return lista[maior]
}

console.log(listaNumerica(1,2,3,55,10,4,12))

