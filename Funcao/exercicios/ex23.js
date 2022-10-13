/* Escreva um algoritmo que leia o codigo de um aluno e suas tres notas. Calcula a media ponderada aluno, 
considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o codigo do aluno, 
suas tres notas, a media calculada e uma mensagem 'Aprovado' se a media for maior ou igual a 5 e 'Reprovado'
se a media for menor que 5. Repita a operação ate que o codigo seja negativo. */

function notas(cod, nota1, nota2, nota3){
    
    if(nota1 > nota2 && nota1 > 3){
       nota1 = nota1 * 4
    } else{
        nota1 = nota1 * 3
    }
    if(nota2 > nota1 && nota2 > nota3){
       nota2 = nota2 * 4
    } else {
        nota2 = nota2 * 3
    }
    if(nota3 > nota2 && nota3 > nota1){
       nota3 = nota3 * 4
    } else {
        nota3 = nota3 * 3
    } 
    if(nota1 && nota2 && nota3 == null){
        return false
    }

    mediaPonderada = (nota1 + nota2 + nota3) / 10
    console.log("A média ponderada é", mediaPonderada, "e seu código é:", cod)

    if(mediaPonderada > 5){
        return "Aprovado!"
    } else if(mediaPonderada < 5){
        return "Reprovado!"
    }


}

console.log(notas(1, 8, 9, 5))
