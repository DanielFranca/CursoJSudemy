const alunos = [
    {nome: 'João', nota: 10, bolsista: true},
    {nome: 'Maria', nota: 8, bolsista: false},
    {nome: 'Roger', nota: 5, bolsista: true},
    {nome: 'Fernanda', nota: 9, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultados)