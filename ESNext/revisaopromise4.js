const fs =  require('fs') //file system
const path = require('path')



function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){ // essa funçãos será chamada quando fizer a leitura do arquivo
            resolve(conteudo.toString())
        })
        console.log('depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo =>conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `o valor final é: ${conteudo}`)
    .then(console.log)