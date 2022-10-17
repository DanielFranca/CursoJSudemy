/*  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são impares    */

function verificaVetor(vetorNumeros){
    
    let par = 0
    let impar = 0

    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            par++
        } else{
            impar++
        }
    }
    console.log(`temos o total de ${par} números pares, e o total de ${impar} números impares no vetor`)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
verificaVetor(vetor)