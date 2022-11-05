
//tratamento de erros
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{ 
            con.log('temp')
            if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5) //chance de erro
    .then(v => console.log(`valor: ${v}`))
    .then(
        v => console.log(v),
        //err = console.log(`Erro esp.: ${err}`)   
    )
    .then(() => console.log('quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('fim!'))