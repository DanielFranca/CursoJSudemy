/*No curso encontrei algumas dificuldades para entender as promises, por esse motivo adicionei novos arquivos com a intenção de melhorar 
o entendimento dessa prática. Fiz um conjunto com 7 arquivos de revisão sobre promise, + 1 de async e await. ~Daniel França */


//Promise = Promessa

let p = new Promise(function(resolve) { //esse resolve fica responsável por cumprir a promessa...
    //cumprirPromessa(3) // só pode pasar um valor, porque a promise só gera um valor, a não ser que seja um array ou um objeto.
    resolve(['ana'])
})  

//console.log(typeof p) //object

p.then(function(valor) {  //then retorna uma promise
    console.log(valor)
})

// p.then(valor  => console.log(valor)) // arrow function

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()
p //esse p chama todas os then...

    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


    /* 
    e usando as funções que fiz a partir da linha 20 até a 26, poderia fazer isso:

    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    */
