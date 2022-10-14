/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console   */ 

function contaNegativos(vetor){
    let count = 0

    for(let i = 1; i < vetor.length; vetor++){
        if(vetor[i] < 0){
            count++
        }
    }
    return count
}

vetor = [-2, 0, 2, 3, 4, 5]
console.log(contaNegativos(vetor))