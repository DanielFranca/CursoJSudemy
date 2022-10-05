/*Crie uma função que dado dois valores (passados como parâmetros ) mostre no console a soma, subtração,
 multiplicação e divisão desses valores.*/

const operacoes = function operacoes(x, y) {
    return {
        multiplicacao: x * y,
        adicao: x + y,
        substracao: x - y,
        divisao: x / y
    }

    //ex corrigido pela CODER.ORG
}

console.log(operacoes(4, 4))
