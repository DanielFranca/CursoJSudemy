/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são 
pares e que também tenham índices pares */

function indicesPares(array) {
    const novoArray = []
    const verificaPar = array.map(function(e){
        if(e % 2 == 0){
        novoArray.push(e)
        return novoArray
        }
        
    })
    console.log(verificaPar)
  
}


console.log(indicesPares([2, 3, 4, 5, 8, 9, 50, 14, 25, 1]))