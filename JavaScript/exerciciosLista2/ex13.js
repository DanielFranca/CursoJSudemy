/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro */

function numerosArray (array) {
    const novoArray = []
    for(let item of array)
        if( typeof item === "number")
            novoArray.push(item)
        return novoArray
    
}
console.log(numerosArray(['daniel', 2, 'fernanda', 5,]))