// let e const 
{
    var a = 2 //sem escopo de bloco
    let b = 3 // com escopo de bloco

    console.log(a) //consegue acessar independente se for fora ou dentro do bloco
    console.log(b) //só consegue acessar dentro do bloco por ter escopo de bloco
}

console.log(a) //consegue acessar
console.log(b) // não consegue acesar

//Template String

const Produto = 'Ipad'
console.log(`${produto} é carp!`)

//Operador Destructuring 
const [l, e, ...tras] = "Daniel"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { nome, idade} = { nome: 'Ana', idade: 9}
console.log(idade, nome)