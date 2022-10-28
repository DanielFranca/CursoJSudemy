console.log(typeof Array, typeof new Array)

let aprovados = new Array ('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // Deixa o índice um imune (sem nenhuma alteraçaõ, e exclui carlos e ana)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // adiciona elemento1 e elemento 2
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // aponta para Bia, e exclui o primeiro elemento depois de Bia, deixando o valor de Ana inalteravel e adicionando elemento1 e elemento2
console.log(aprovados) 