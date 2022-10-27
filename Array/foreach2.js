Array.prototype.forEach2 = function(callback) {
    for( let i=0; i < this.length; i++){
        callback(this[i], i, this) // [i] = indice do for, i = indice do proprio array, this= array completo
    }
}

const aprovados = ['Agatha', 'Bruno', 'Daniel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)

    /* 
     ----Revisão---
    como funciona o foreach? 
    dentro do foreach é executado um simples for, que percorre indice a indice os elementos listados na função callback,
    neste caso queremos listar os alunos que foram aprovados um por um, então usamos o indice para contabilizar cada nome, 
    e usamos nome para imrpimir os nomes dos alunos aprovados. 
    No callback, percebe-se que se passa um array também, esse array só é necessário se eu quiser que depois do que foi definido 
    retornar o array completo, por exemplo: 
    1) Agatha = aqui retornamos  o indice (1) e o nome (agatha)
    ['agatha', 'bruno', 'Daniel'] - aqui retornamos tudo o que existe no array.
    
    */
})

