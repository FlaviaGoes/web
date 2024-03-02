"use strict";
/*
Lista de Exercícios Funções

    Exercício 1

    Crie uma função que receba uma lista de números como parâmetro e retorne o
    maior número da lista.

*/
function listaNumerica(...lista) {
    let maior = 0;
    for (let i = 0; i <= lista.length; i++) {
        if (lista[maior] < lista[i])
            maior = i;
    }
    return lista[maior];
}
console.log(listaNumerica(1, 2, 3, 55, 10, 4, 12));
/*
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
console.log(ImparPar(2));
/*
Exercício 3

    Implemente uma função que calcule a média aritmética de um array de números
    e retorne o resultado. Utilize essa função para calcular a média de diferentes
    conjuntos de números.

*/
function conjuntosMedia(...valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma / valores.length;
}
console.log(conjuntosMedia(1, 2, 3, 4, 5));
/*
    Exercício 4

    Crie uma função que receba uma string como parâmetro e retorne a mesma
    string com todas as letras em caixa alta. Utilize essa função para converter
    diferentes strings.
*/
function HighBox(palavra) {
    return palavra = palavra.toUpperCase();
}
console.log(HighBox('Casa'));
/*
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
    if (cont = 2)
        return true;
    else
        return false;
}
console.log(NumPrimo(7));
/*
    Exercício 6

    Implemente uma função que inverta a ordem dos elementos em um array.
    Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
*/
function Inverso(...val) {
    return val.reverse();
}
console.log(Inverso(1, 2, 3));
/*
    Exercício 7

    Crie uma função que receba um valor e uma porcentagem como parâmetros. A
    função deve retornar o valor acrescido da porcentagem indicada.
*/
function porcentagem(numero, porcent) {
    let val = Number(porcent.replace('%', ''));
    return ((numero * val) / 100);
}
console.log(porcentagem(100, '10%'));
/*
    Exercício 8
    Crie uma função que receba uma string e retorne a mesma string, mas com as
    palavras em ordem reversa.
*/
function palindromo(palavra) {
    let word = palavra;
    const fraseInverso = palavra.split('').reverse().join('');
    return fraseInverso;
}
console.log(palindromo('reconhecer'));
/*
    Exercício 9
    
    Implemente uma função que retorne a soma de todos os números pares em um
    array.
*/
/*
    Exercício 10

    Crie uma função que calcule o fatorial de um número. Utilize essa função para
    calcular o fatorial de diferentes números.
*/
function fatorial(num) {
    for (let i = 1; i <= num; i++) {
        num *= i;
    }
    return num;
}
console.log(fatorial(3));
