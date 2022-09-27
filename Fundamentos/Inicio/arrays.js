const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // o método push adiciona novos dados ao array
console.log(valores)

console.log(valores.pop()) //o método pop retira o ultimo elemento do array e retorna.
delete valores[0] // o método delete faz com que voce aponte o elemento a ser excluido no array.
console.log(valores)

console.log(typeof valores)