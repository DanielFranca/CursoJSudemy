/* Faça um algoritimo que calcule o fatorial de um número */

function fatorial (numero){
    if(numero == 0){ // isso porque de qualquer forma quero forçar que o código calcule um fatorial, 
        //então mesmo se ele colocar um número consideravelmente nulo como o 0, o código irá fazer o fatorial de 1, mesmo que seja negativo.
        return 1 * (numero - 1)
    } else {
        return numero * fatorial(numero - 1)
    }
    //ex corrigido pela CODER.ORG
}
console.log(fatorial(0))