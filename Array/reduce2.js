
const alunos = [
    {nome: 'João', nota: 10, bolsista: true},
    {nome: 'Maria', nota: 8, bolsista: false},
    {nome: 'Roger', nota: 5, bolsista: true},
    {nome: 'Fernanda', nota: 9, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))