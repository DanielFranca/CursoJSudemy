/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
de 100 em 100 anos não é ano bissexto;
de 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras;
Partindo dai elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem
e retornando true ou false. */

function anoBissexto(ano) {
    if(ano % 4 == 0){
    return true
    } if(ano % 100 == 0){
    return true
    } if(ano % 400 == 0){
    return true
    } else {
        return false
    }
    //ex corrigido pela CODER.ORG
}

console.log(anoBissexto(2020))