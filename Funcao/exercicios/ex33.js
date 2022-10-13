/*Crie três vetores, chamados: valorInteiro, valorDouble, valorString. Cada um deles deverá conter quatro valores, sendo o primeiro com valores
inteiros, o segundo como strings e o terceiro com valores decimais. Declarados os valores, utilize a função de união concat() de duas maneiras
diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.  */

function vetores(vetorInteiro, vetorDouble, vetorString){
    //º1 forma
    let resultado = vetorInteiro.concat(vetorDouble, vetorString)
    console.log(resultado)

   //2º forma
    console.log(`Número na chamada: ${vetorInteiro}  Nota: ` + `${vetorDouble} ` +  `Nome: ${vetorString} `)
}
vetorInteiro = [10]
vetorDouble = [10.0]
vetorString = ["Daniel"]

console.log(vetores(vetorInteiro, vetorDouble, vetorString))