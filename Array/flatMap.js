const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.aluno.map(getNotaDoAluno)

const nota1 = escola.map(getNotaDoAluno)
console.log(nota1)

console.log([].concat)