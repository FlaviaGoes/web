/*
Lista de Exercícios Funções

    Exercício 10

    Crie uma função que calcule o fatorial de um número. Utilize essa função para
    calcular o fatorial de diferentes números.
*/

function fatorial(numero : number) : number {
    let num : number = 1
    for(let i = 1; i <= numero; i++){
        num *= i
    }

    return num
}

console.log(fatorial(10))
