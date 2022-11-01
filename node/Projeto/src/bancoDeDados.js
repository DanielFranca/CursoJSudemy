const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id // se o id do produto não estiver setado, vamos receber sequence.id 
    produtos[produto.id] = produto //se o produto estiver setado ele substitui pela versão mais nova, caso não estiver setado ele adiciona elemento (atributo) dentro de produtos, que vai ser consequetemente o idproduto
    return produto
}

function getProduto(id) {
    return produtos[id] || {} //caso o produto seja null ou undefined, retorna um objeto vazio  
}

function getProdutos(){
    return Object.values(produtos) // retorna todos os valores dentro do objeto produto
}
function excluirProduto(id){
    const produto = produto[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}
