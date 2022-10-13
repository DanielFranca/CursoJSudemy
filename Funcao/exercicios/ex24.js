/* Crie um programa que imprima 11 vezes a frase "Hello world!", utilizando uma estrutura de repetição
while */

function repeteFrase(frase){
    let cont = 0
    for(let i = 0; i < 11; i++){
        cont++
        console.log(cont, frase)
        
    }
}
repeteFrase("Hello world")