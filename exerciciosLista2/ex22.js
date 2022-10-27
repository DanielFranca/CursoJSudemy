/* Crie uma função que receba uma string como parâmetro e conte quantas palavras tem nela*/

function verificaFrase(frase){
    var espacos = 0

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === " "){
            espacos++
        }
    }
    return espacos
}
console.log(" essa frase tem " + verificaFrase(" olá tudo bem ") + " palavras!")