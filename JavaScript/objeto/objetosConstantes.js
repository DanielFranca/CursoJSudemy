// pessoa -> aponta para o endereço de memória 123 -> endereço aponta para o objeto {...}

const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


//pessoa -> 456 -> {...}

//pessoa= {nome: 'Ana'}  // erro 

Object.freeze(pessoa) //permite que voce tente alterar o objeto sem dar erro, mas não consiga altera-lo.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome) 
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)