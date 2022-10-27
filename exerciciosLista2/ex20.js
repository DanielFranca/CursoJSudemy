/* Numa aplicação web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba uma array com uma quantidade indeterminada
de números e retorne a média simples desses numeros. */

/* solução incorreta
function calcularMedia(array){
    const media = 0
    const tamanho = array.length
    for(numero of array) {
        media += numero
    }
    return media / tamanho
    
}*/ 

// Solução revisão

function calcularMedia(numeros){
    const quantidadeDeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)

    return  somaTotal / quantidadeDeNumeros
}
console.log(calcularMedia([2, 4, 6, 8, 10])) 