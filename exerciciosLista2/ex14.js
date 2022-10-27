/* Desenvolva uma função que rcebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array
formado pelos pares chave/valor que corresponde a um atributo de objeto.*/

function objetoParaArray(objeto){
    return Object.entries(objeto)

}

console.log(objetoParaArray({ modelo: 'A4', valor: '89000', proprietario: 'daniel' }))
