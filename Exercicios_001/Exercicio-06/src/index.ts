/*
Lista de Exercícios Funções
        
    Exercício 6

    Implemente uma função que inverta a ordem dos elementos em um array.
    Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

*/

function Inverso(... val :  any[]) : any[]{
    return val.reverse()
}

console.log(Inverso('a', 'b', 'c'))
