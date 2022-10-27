/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é 
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está 
desenvolvendo no momento é de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas */

function despesas (produtos){
    return produtos

    .map(produtos => produtos.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)

}

const produtos = [{nome: 'mesa', categoria: 'domésticos', preco: 500}, {nome: 'computador', categoria: 'eletrônicos', preco: 2800}]
console.log(despesas(produtos))
