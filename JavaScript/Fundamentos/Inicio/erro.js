function tratarErroLancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final') // sempre o final será impresso, mesmo que ocorra ou não o erro
    }
}

const obj = {nome: 'Roberto' } // declarei nome na constante obj, ao invés de name, para cair no erro e imprimir a function de tratarErroLancar()
imprimirNomeGritado(obj)