/* Elabore uma função que recebe um numero como parâmetro e retorne uma string com o simbolo "+" na 
quantidade especificada no parâmetro.*/

function imprime(n1) {
    let resultado = ''
    
    for(let i = 0; i < n1; i++)
    resultado += '+'

    return resultado
    

}
console.log(imprime(5))