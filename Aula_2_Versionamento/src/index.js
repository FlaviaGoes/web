/*
Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários.
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.
*/
var nomeCompleto = "Flavia Goes";
var idade = 19;
var email = 'flavia04goes@outlook.com';
var isAtivo = true;
/*


2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

*/
var usuario;
usuario = {
    nome: 'Flavia',
    sobrenome: 'Goes',
    idade: 19,
    contato: {
        email: 'flavia04goes@outlook.com',
        telefone: '(15) 982813267',
    }
};
var user;
user = {
    nome: 'Flavia',
    sobrenome: 'Goes',
    idade: 19,
    contato: {
        email: 'flavia04goes@outlook.com',
        telefone: '(15)982813267'
    }
};
console.log(user);

/*
    Exercício:
    Vamos criar um sistema de gestão de produtos para uma loja online.
    Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.
*/
var nome;
var price;
var available;
/*

02 - Crie um objeto produto com as seguintes propriedades:

    nome: string, representando o nome do produto.
    preco: number, representando o preço do produto.
    estoque: number, representando a quantidade em estoque do produto.
    categorias: array de strings, representando as categorias às quais o produto pertence.
    Em seguida, imprima todas as variáveis e propriedades do objeto produto usando console.log.

*/
var produto;
produto = {
    nome: 'Mouse',
    price: 50,
    estoque: 50,
    categorias: 'office',
};
console.log(produto);
