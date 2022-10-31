console.log(this === global) // falso, porque this não aponta para global, e sim para module.exports
console.log(this === module) //porque this é um objeto que aponta diretamente para a referencia de module.exports

console.log(this === module.exports) //true 
console.log(this === exports) // true

function logThis(){
    console.log('dentro de uma função..')
    console.log(this === exports) //false
    console.log(this === module.exports) //false
    console.log(this === global) // true, dentro de uma função curiosamente this aponta para global...

    this.perigo + '...' //colocando dentro do escopo global (ter muito cudado aonde voce acessa o this)
}
logThis()

const arrowFunction = () => {
    console.log('Não aponta para o global ->', this === global)
    console.log('aponta para o exports ->', this === exports)
    console.log('Aponta para o module.exports (que é basicamente o mesmo que exports) ->', this === module.exports)

    console.log('o this nesta função NÃO É O GLOBAL ->', this === global)
    console.log('o this nesta função é o MODULE.EXPORTS -> ', this === module.exports)
}
arrowFunction()

