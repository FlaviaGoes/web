/*
Lista de Exercícios Funções

    Exercício 3

    Crie uma função em TypeScript que valide se um CPF é válido ou não. O CPF é
    composto por 11 dígitos numéricos. Considere a entrada como numérica. Para ser válido, ele deve
    seguir algumas regras específicas de formação e ter dígitos verificadores corretos, conforme a
    informações a seguir:

    

*/

function ValidadorCPF(... CPF : number []) : boolean {
    let cont = 10
    let soma = 0

    for(let i = 0; i <= 8; i++){
        soma += CPF[i]*cont
        cont--
    }

    let resto = (soma*10)%11

    soma = 0
    cont = 11

    for(let i = 0; i<=9; i++){
        soma += CPF[i]*cont
        cont--
    }

    let resto2 = (soma*10)%11

    if(resto2 == CPF[10])
        if(resto == CPF[9])
            return true
        else
            return false
    else
        return false

}

console.log(ValidadorCPF(5,2,9,9,8,2,2,4,7,2,5))

