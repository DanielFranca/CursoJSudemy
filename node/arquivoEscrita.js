const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1458.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!') //gera um arquivo ---- se err for nulo ela vai se tornar falsee e sendo diferente de nulo ela vai gerar o arquivo.
})