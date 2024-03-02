/*
Lista de Exercícios Funções

    Exercício 7

    Crie uma função que receba um valor e uma porcentagem como parâmetros. A
    função deve retornar o valor acrescido da porcentagem indicada.
    
*/

function porcentagem(numero : number, porcent : string) : number {
    let val : number = Number(porcent.replace('%',''))
    return ((numero*val)/100)
}

console.log(porcentagem(110, '15%'))
