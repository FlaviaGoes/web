/*
Lista de Exercícios Funções

    Exercício 9
    
    Implemente uma função que retorne a soma de todos os números pares em um
    array.

*/

function pares(... num : number []) : number {
    let soma : number = 0
    for(let i = 0; i < num.length; i++){
        if(num[i]%2==0)
            soma += num[i] 
    }

    return soma

}

console.log(pares(1,2,3,4))

