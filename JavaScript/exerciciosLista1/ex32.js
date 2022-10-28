/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros  */

function media(vetor){
    let soma = 0


    for(let i = 0;  i < vetor.length; i++){
        soma += vetor[i]       
    }
    return soma/vetor.length // pega a soma e divide pelo tamanho do vetor diretamente no return, sem ter que criar outra variavel de media...
    
}

vetor = [10, 20, 30, 40, 50, 60]
console.log(media(vetor))