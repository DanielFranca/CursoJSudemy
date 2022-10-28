/* Escreva uma função que receba dois parametros. O primeiro parametro é o elemento que repetirá, enquanto que 
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(item, quantidade){
    let array = []

    for(let i =0; i < quantidade; i++)
        array.push(item)

    return array
}
console.log(repetir('cadeira', 2))