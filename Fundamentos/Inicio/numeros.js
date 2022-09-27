const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //para saber se é um valor inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avalaicao2 = 6.871

const total = avaliacao1 * peso1 + avalaicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) /* O método toFixed faz com que voce elimine as casas decimais podendo limitar elas passando o valor de casas decimais
                                desejado para retorno */

console.log(media.toString(2))