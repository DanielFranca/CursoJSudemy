console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// NÃO ESQUECER QUE TODA FUNÇÃO TEM UM ATRIBUTO CHAMADO PROTOTYPE

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Daniel França'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

String.prototype.toString = function(){
    return 'deu ruim '
}

console.log('Daniel'.reverse())