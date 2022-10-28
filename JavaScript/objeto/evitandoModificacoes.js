// Object.preventExtensions = ele previne que o objeto seja extendido ou seja ele previne que a gente adicione novos atributos no objeto
// podemos excluir, só não podemos adicionar novos atributos 

 const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
 })
 console.log('Extensivel', Object.isExtensible(produto)) // testa se o objeto é extensivel ou não, no caso retorna false porque o objto não é extensivel.

 produto.nome = 'Borracha'
 produto.descricao = 'Borracha escolar branca'
 delete produto.tag
 console.log(produto)

 //Object.seal

 const pessoa = { nome: 'Juliana', idade: 35}
 Object.seal(pessoa)
 console.log('Selado: ', Object.isSealed(pessoa))
 pessoa.sobrenome = 'Silva'
 delete pessoa.nome // Não é posssivel porque o objeto esta selado 
 pessoa.idade = 29
 console.log(pessoa)

 // Object.freeze = selado + constantes
 