let valor // não inicializada = undefined 
console.log(valor)
//console.log(valor2) // is not undefined - não foi nem declarada

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)