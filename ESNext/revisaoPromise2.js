setTimeout(function () {
    console.log('executando callback..')
    
    
    setTimeout(function(){
        console.log('executando callback..')
        
        setTimeout(function(){
            console.log('executando callback..')
            
        }, 2000)
    }, 2000)
}, 2000) //executa o código depois de 2 segundos = 2000 milissegundos

//com promise

function esperarPor(tempo = 2000) { // aqui criei uma function que recebe o tempo de 2000 milissegundos
    return new Promise(function(resolve) { // o retorno dessa function é uma promisse, que vai ser o cumprimento dessa promisse com o resolve
        setTimeout(function()  { // esse setTimeOut vai ser usado para executar essa promise depois do tempo estimado no final da function
            console.log('executando promise...') // esse console vai servir para quando executar a promise, ele avisar que está sendo executado
            resolve('vishh') // aqui é para chamar a resolve dentro do tempo estimado
        }, tempo); // aqui estamos passando o parametro que definimos no comeco da function.
    })
}


let p = esperarPor(3000) //3 segundos
    .then(() => esperarPor())
    .then(esperarPor)