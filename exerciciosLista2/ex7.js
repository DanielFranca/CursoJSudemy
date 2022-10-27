/* Crie uma função que receba quatro numeros como parametros (numero, minimo, maximo, inclusivo) e retorne se o parametro
numero (o primeiro) está entre o minimo e maximo. Quando o parametro inclusivo for true, tenha "entre" como inclusivo, ou 
seja, considerando se numero é igual a minimo ou a maximo. Caso o parametro inclusivo não seja informado, seu valor padrao 
devera ser false, portantom a logica sera exclusiva, não considerando se numero é igual a minimo ou a maximo. */

function verifica(num, min, max, inclusivo = false){

    if(inclusivo) return num >= min && num <= max
    
    return num > min && num < max
    }

console.log(verifica(10, 100, 50))
console.log(verifica(16, 100, 100))
console.log(verifica(3, 150, 3))
console.log(verifica(3, 150, 3, true))

