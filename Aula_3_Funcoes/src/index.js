// funcao nomeada
function adicionar(x, y) {
    return x + y;
}
// funcao anonima
var add = function (x, y) { return (x + y); };
//Funções com tipos
function adicionarTipada(x, y) {
    return x + y;
}
function somarTipada(p1, p2) {
    var p = { x: p1.x + p2.x, y: p1.y + p2.y };
    return p;
}
var ponto_1 = { x: 1, y: 5 };
var ponto_2 = { x: 10, y: 20 };
var ponto3 = somar(ponto_1, ponto_2); // retorna {x: 11, y: 25}
//Parâmetros opcionais e padrões
function nome(primeiro, ultimo) {
    if (ultimo) {
        return "".concat(primeiro, " ").concat(ultimo);
    }
    else {
        return primeiro;
    }
}
nome('José', 'Silva'); // retorna 'José Silva'
nome('José'); // retorna 'José'
function inicializar(valor) {
    if (valor === void 0) { valor = 0; }
    return valor;
}
inicializar(); // retorna 0
inicializar(10); // retorna 10
//Parâmetros rest
//Não confundir com REST, recurso para definição de serviços sobre HTTP
function concatenar(primeiro) {
    var ultimos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ultimos[_i - 1] = arguments[_i];
    }
    return primeiro + ' ' + ultimos.join(' ');
}
concatenar('a', 'b', 'c', 'd', 'e'); // retorna 'a b c d e';
function somar(p1, p2) {
    if (p1 instanceof Array) {
        return [p1[0] + p2[0], p1[1] + p2[1]];
    }
    else {
        return { x: p1.x + p2.x, y: p1.y + p2.y };
    }
}
var ponto1 = { x: 1, y: 5 };
var ponto2 = { x: 10, y: 20 };
somar(ponto1, ponto2); // retorna {x: 11, y: 25}
somar([1, 1], [2, 2]); // retorna [3, 3]
/*
Exercício 1: Calculadora Simples
Crie uma função chamada calculadora que recebe três parâmetros:
numero1 (um número), numero2 (um número) e operacao (uma string representando a operação a ser realizada: "soma", "subtracao", "multiplicacao" ou "divisao").
A função deve retornar o resultado da operação entre numero1 e numero2.

Resultado esperado:
console.log(calculadora(5, 3, "soma")); // Saída esperada: 8
console.log(calculadora(10, 2, "subtracao")); // Saída esperada: 8
console.log(calculadora(4, 5, "multiplicacao")); // Saída esperada: 20
console.log(calculadora(10, 2, "divisao")); // Saída esperada: 5

Dica:
Estrutura switch-case
switch(expression) {
   case constant-expression1: {
      //statements;
      break;
   }
   case constant_expression2: {
      //statements;
      break;
   }
   default: {
      //statements;
      break;
   }
}

*/
function calculadoraSimples(x, y, i) {
    var caso;
    var val;
    i = i.toUpperCase(); // Assign the result of toUpperCase() back to i
    if (i === 'SOMA')
        caso = 1;
    if (i === 'SUBTRACAO')
        caso = 2;
    if (i === 'MULTIPLICACAO')
        caso = 3;
    if (i === 'DIVISAO')
        caso = 4;
    switch (caso) {
        case 1:
            return x + y;
        case 2:
            return x - y;
        case 3:
            return x * y;
        case 4:
            return x / y;
    }
}

console.log(calculadoraSimples(1, 2, 'soma'));

/*
Exercício 2: Verificador de Palíndromo
Crie uma função chamada verificarPalindromo que recebe uma string como parâmetro e retorna verdadeiro se a string for um palíndromo
(ou seja, se ela é lida da mesma forma da esquerda para a direita e da direita para a esquerda) e falso caso contrário.

Resultado esperado:
console.log(verificarPalindromo("arara")); // Saída esperada: true
console.log(verificarPalindromo("reviver")); // Saída esperada: true
console.log(verificarPalindromo("banana")); // Saída esperada: false
console.log(verificarPalindromo("reconhecer")); // Saída esperada: true

Dica:
let frase: string = "Ana"
const fraseInverso = frase.split('').reverse().join('');

*/ 
