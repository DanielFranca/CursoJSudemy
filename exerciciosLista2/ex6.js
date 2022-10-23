/* Escreva uma função que receba um valor booleano ou númerico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parametro
for numéricom o retorno será o inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parametro
de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parametro é do tipo..." */

function inverterTudo(valor){
    const tipo = typeof valor

    if(tipo == "boolean") return !valor
    else if(tipo == "number") return -valor
    else
        return `booleano ou numero esperados, mas o parametro é do tipo ${tipo}`

}
console.log(inverterTudo(10))
console.log(inverterTudo(true))