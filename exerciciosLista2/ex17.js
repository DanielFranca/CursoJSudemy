/* Escreva uma função que receba uma array e retornará a soma de todos os números desse array. */

function somarNumeros(array) {
    resultado = array.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return resultado
}
console.log(somarNumeros([1, 1, 1, 1, 1, 1, 1]))



