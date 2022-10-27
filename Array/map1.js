const numeros = [1, 2, 3, 4, 5]

// Map é um for com propósito

let resultado = nums.map(function(e) { // e = elemento atual
   return e * 2
})

console.log(resultado, nums) // o map gera um novo array, nesse console está representado o array com os numeros multiplicado, e depois o array original

const soma10 = e => e + 10 // pega o elemento autal e adiciona mais 10 em uma constante separada
const triplo = e => e * 3  // pega o elemento atual e multiplica por 3 em uma constante separada
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
// Cria uma constante para transformar o elemento atual em float, é usado também o tofixex com parametro 2 para ter duas casas decimais, e replace para espeficado para substituir ponto por vírgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)