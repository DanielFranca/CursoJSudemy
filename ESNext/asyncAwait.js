// com promise
const http = require('http')
const { get } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{ //resolve = quando a promise é atendida & reject = quando a promise é rejeitada
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
               try {
                resolve(JSON.parse(resultado))
               } catch(e) {
                reject(e)
               }
            })
        })
    }) 
}


//recurso de ES8
//oBJETIVO DE SIMPLIFICAR o uso de promises...

let obterAlunos = async () => {
    const ta = await  getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(alunos => console.log(nomes))