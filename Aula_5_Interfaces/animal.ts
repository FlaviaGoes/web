/*
    1) Suponha que estamos desenvolvendo um sistema de gerenciamento de animais
    em um zoológico. Vamos criar uma interface Animal que define a estrutura básica
    de um animal, e duas classes Mamifero e Ave que implementam essa interface em
    arquivos separados.
*/

export interface Animal {
    alimentar() : boolean;
    nascer() : boolean;
}

