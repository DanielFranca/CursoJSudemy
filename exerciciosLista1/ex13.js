/* Crie um programa que exibe se um dia é util, fim de semana ou dia inválido dado o 
número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a 
estrutura switch */

function diaUtil(dia){
    switch(dia){
        case 1: 
        console.log("Não é dia útil - Domingo")
        return true

        case 2:
        console.log("Dia útil - Segunda - Feira")
        return true

        case 3:
        console.log("Dia útil - Terça - Feira")
        return true

        case 4:
        console.log("Dia útil - Quarta - Feira")
        return true

        case 5:
        console.log("Dia útil - Quinta - Feira")
        return true

        case 6:
        console.log("Dia útil - Sexta - Feira")
        return true

        case 7:
        console.log("Dia útil - Sábado")
        return true
        
        default:
            console.log("O dia é inválido. Considere que a semana tem 7 dias, e é verificado de 1 a 7.")
            return false
    }
     //ex corrigido pela CODER.ORG
}

console.log(diaUtil(2))