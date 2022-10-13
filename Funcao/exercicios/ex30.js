/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor  */
function maiorVetor(vetor){
    let maior
    let menor

    for(let i = 1; i < vetor.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
                if( vetor[i] > maior){
                maior = vetor[i]
                } 
                if(vetor[i] < menor){
                 menor = vetor[i]
                }
            }
        }
        
    
    return  [maior, menor]
    }

vetor = [10, 20, 30, 40, 50, 60, 70, 80]
console.log(maiorVetor(vetor))
