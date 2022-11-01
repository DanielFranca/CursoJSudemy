const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // lê de forma sincrona e assincrona
//dirrname = diretório atual

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') //readFileSync = ou seja lê de forma síncrona
console.log('formato sincrono', conteudo)


//assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`formato assincrono ${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //lê arquivo json e ja converte para objeto
console.log(config.db) // conseguiria trazer 'config.db.host' porque o require me permite isso, por converter para objeto...

fs.readdir(__dirname, (err, arquivos) => { //readdir = le arquivos de um diretororio... ou seja le os arquivos encontrado no diretorio dirname.
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})