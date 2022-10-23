/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário no mês, e o quanto ele 
recebe por hora. O retorno da função deve ser a String "Salário igual a R$: X, em que X é o quanto o funcionário ganhou no mês" */

function funcionario(salarioH, horasT){
    calculo = salarioH * horasT
    console.log(`Salário igual a R$: ${calculo}`)
}

funcionario(10, 120)

