/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabaela abaixo:

Plano  Aumento

A       10%
B       15%
c       20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.
Use a estrutura Switch Case e faça um caso default que indique que o plano é inválido

*/

function salario(planoT, salarioAtual){
    switch(planoT){
        case "A":
           return salarioAtual * 1.1
            case "B":
                return salarioAtual * 1.15
                    case "C":
                    return salarioAtual * 1.2
                        default:
                            console.log("Plano inválido!")
    }   
    //ex corrigido pela CODER.ORG
}

console.log(salario("A", 1000))
