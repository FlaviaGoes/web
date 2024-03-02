/*
Lista de Exercícios Funções
    
    Exercício 8
    
    Crie uma função que receba uma string e retorne a mesma string, mas com as
    palavras em ordem reversa.

*/

function palindromo(palavra:string) : string {
    const fraseInverso = palavra.split('').reverse().join('')
    return fraseInverso
}

console.log(palindromo('reconhecer'))
