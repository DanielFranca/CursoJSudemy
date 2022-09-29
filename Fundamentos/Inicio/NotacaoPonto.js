console.log(Math.ceil(6.1)) //Math.ponto arredonda o numero para cima 
console.log(Math.floor(6.4)) //Math.floor arredonda o numero para baixo

const obj1 = {}
    obj1.nome = 'bola'
//obj['nome'] = 'bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }

}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj1.nome)
obj3.exec() 

/* const objts = {}
objts.preco = 200.00
console.log(objts.preco)

function Objts(preco){
    this.preco = preco
}

console.log('nome do item ', obj1, 'valor do item: R$: ', objts.preco) */