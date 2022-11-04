const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framwork: true})

console.log(tecnologias.react) //undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function (){}, 'função'],
    [{}, 'objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has = diz se o valor está incluido ou não nesse objeto
chavesVariadas.delete(123) //exclui o elemento
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //quantos elementos estão presentes dentro do map