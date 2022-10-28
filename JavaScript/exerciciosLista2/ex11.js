/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array */

function novoArray(array){

    const primeiroArray = array.shift() //retorna primeiro elemento do array!
    const ultimoArray = array.slice(-1) //retorna o ultimo elemento do array!

    const novoArray2 = [primeiroArray, ultimoArray]
    console.log(novoArray2)



}

novoArray([20, 30, 40, 'olá'])