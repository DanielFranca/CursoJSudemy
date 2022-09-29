// Par nome/valor

const saudacao = 'opa' //contexto léxico = local onde sua variável foi definida fisicamente no código

function exec(){
    const saudacao = 'Eaiii' // Contexto léxico 2 = define o contexto da função
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    emdereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)