// Arrow Function 
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow Function (this)
const lexicol = () => console.log(this === exports)
const lexico2 = lexico.bind({})
lexico1()
lexico2()

//Parametros Default
function log(texto = 'node') {
    console.log(texto)
}

log(null)
log('sou mais forte')

//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))