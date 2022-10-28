function verificaFrase(letra, frase){
    var contaletra = 0

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === letra){
            contaletra++
        }
    }
    console.log(`o total de letra "${letra}" na frase "${frase} é igual a ${contaletra}"`)
}
console.log(" essa frase tem " + verificaFrase(" olá tudo bem ") + " palavras!")