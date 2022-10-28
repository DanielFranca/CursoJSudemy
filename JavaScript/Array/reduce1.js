const alunos = [
    {nome: 'João', nota: 10, bolsista: true},
    {nome: 'Maria', nota: 8, bolsista: false},
    {nome: 'Roger', nota: 5, bolsista: true},
    {nome: 'Fernanda', nota: 9, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {

    // Revisão Reduce
     /* Neste caso usamos reduce para tratarmos o valor anterior mais o atual, manipulando-os
     por exemplo, quando executamos nossa arrow function, ela percore todo o array, fazendo
     com que a gente pegue a nota do acumulador e some com a nota atual.

     */
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //valor inicial

console.log(resultados)