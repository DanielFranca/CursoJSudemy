const notas = [5.5, 9.6, 8.7, 5.4]

for(let i in notas){
    console.log(i, notas[3])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

