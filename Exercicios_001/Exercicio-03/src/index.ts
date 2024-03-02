/*
Lista de Exercícios Funções

    Exercício 3

    Implemente uma função que calcule a média aritmética de um array de números
    e retorne o resultado. Utilize essa função para calcular a média de diferentes
    conjuntos de números.

*/

function conjuntosMedia(...valores : number []) : number {
    let soma : number = 0
    for(let i = 0; i < valores.length; i++){
       soma += valores[i] 
    }

    return soma/valores.length
}

console.log(conjuntosMedia(1,2,3,4,5))

