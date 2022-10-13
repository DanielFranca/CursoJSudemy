/*Crie duas funções que recebem dois parametros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função
retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo
da primeira se somente o valor do elemento for igual a 5  */


function multiplicaVetor(vetor, numero){
    let multiplica = []
    vetor.forEach(element => {
        multiplica.push(element * numero)
    });

    return multiplica
}
function multiplicaVetor2(vetor, numero){
    let multiplica = []
        if(numero == 5 ){
            vetor.forEach(element => {
                multiplica.push(element * numero) 
            });
        }
    }



vetor = [2, 2, 6, 2, 8, 2]
console.log(multiplicaVetor(vetor, 2))
console.log(multiplicaVetor2(vetor, 5))