/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne 'parabéns' o número sorteado foi o X. se
não for igual, retorne 'Que pena, o número sorteado foi o x', x é o número que foi sorteado*/

function funcaoDaSorte(numero){
    const aleatorio =  Math.floor(10* Math.random() + 1)
    console.log(aleatorio)
    
    if(!numero > 1 || numero > 10){ 
    return false
    }
    if (numero == aleatorio) {
    console.log(` Parabéns o número sorterado foi o:  ${numero}`)
    } else {
        console.log(`Que pena, o número sorteado foi o ${numero} `)}
}
console.log(funcaoDaSorte(10))