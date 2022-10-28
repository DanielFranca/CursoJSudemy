/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor
estão no intervalo [10, 20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora 
do intervalo, escrevendo estas informações */

function intervaloVetor(vetor){
    let contaDentroIntervalo = 0
    let contaForaIntervalo = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            contaDentroIntervalo++
        } else {
            contaForaIntervalo++
        }
    }
    return `Temos ${contaDentroIntervalo} numeros dentro do intervalo de 10 e 20, e temos ${contaForaIntervalo} numeros fora do intervalo de 10 e 20`
}

vetor = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
console.log(intervaloVetor(vetor))