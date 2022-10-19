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

const resultado = carrinho.map(paraObjeto).map(pegaNome)
const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
console.log(resultado2)