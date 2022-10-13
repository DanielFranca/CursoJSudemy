/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará true ou false, caso todos os caracteres (independentemente de
    ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */ 


function verificaPalavras(palavra, palavra2){
    let contem = true

    for(let i = 0; i < palavra.length; i++){
        let caracterPalavra = palavra.chartAt(i).toLowerCase()
        for(let j = 0; j < palavra2.length; j++){
            let caracterePalavra2 = palavra2.chartAt(j).toLowerCase()
            if(caracterPalavra == caracterePalavra2) {
                contem = true
                break
            }else{
                contem = false
            }
        }
        if(!contem){
            return contem
        }
    }
    for(let i = 0; i < palavra2.length; i++){
        let caracterPalavra2 = palavra2.chartAt(i).toLowerCase()

        for(let j = 0; j < palavra.length; j++){
            let caracterePalavra = palavra2.chartAt(j).toLowerCase()
            if(caracterePalavra == caracterPalavra2) {
                contem = true
                break
            }else{
                contem = false
            }
        }
        if(!contem){
            return contem
        }
    }
    return contem

    
}

console.log(verificaPalavras('daniel', 'franca'))