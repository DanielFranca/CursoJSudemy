/* utilizando a estrutura switch faça um programa que simule uma calculadora básica. O programa 
recebe como parâmetros dois valores numéricos e uma string referente à operação e a realiza com
os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, '+', 3). A função
efetuará a soma de 2  e 3. Dica: Os sinais das operações são '+', '-', '*', '/'. Crie um caso default
para operações inválidas*/

function calculadora (x, y, operacao ){

    switch(operacao){
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
            default:
                return "operação inválida!"
    }
     //ex corrigido pela CODER.ORG
}

console.log(calculadora(8, 5, '+'))
console.log(calculadora(8, 5, '-'))
console.log(calculadora(8, 5, '*'))
console.log(calculadora(8, 5, '/'))
console.log(calculadora(4, 5, '//*'))