Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 9.55}',
    '{"nome": "Lápis", "preco": 1.45}',
    '{"nome": "Apontador", "preco": 4.45}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
const pegaNome = produto => produto.nome

const resultado = carrinho.map2(paraObjeto).map2(pegaNome)
const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
console.log(resultado2)