function esperarPor(tempo = 2000) { // aqui criei uma function que recebe o tempo de 2000 milissegundos
    return new Promise(function(resolve) { // o retorno dessa function é uma promisse, que vai ser o cumprimento dessa promisse com o resolve
        setTimeout(function()  { // esse setTimeOut vai ser usado para executar essa promise depois do tempo estimado no final da function
            console.log('executando promise...') // esse console vai servir para quando executar a promise, ele avisar que está sendo executado
            resolve('vishh') // aqui é para chamar a resolve dentro do tempo estimado
        }, tempo); // aqui estamos passando o parametro que definimos no comeco da function.
    })
}

//await esperarPor(3000) //erro. só é valido dentro de uma function assíncrona 

esperarPor(2000)
    .then(() => console.log('Executando promise 1...')) //espera 2 segundos e executa
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido(){
    return 20
}

async function executar(){ //com async tornei a função assíncrona 
//    esperarPor(2000) // = S/ await 
//    console.log('Async/Await 2..')

//    esperarPor(2000) // = S/ await 
//   console.log('Async/Await 2..')

//    esperarPor(2000) // = S/ await 
//    console.log('Async/Await 2..')

    let valor = await retornarValor()

    await esperarPor(2000) //com a função assíncrona posso chamar o await, e sempre que a função retorna uma promise eu posso usar ela junto com awai.
    console.log(`Async/Await 1.. ${valor}`)

    await esperarPor(2000) // = C/ await
    console.log(`Async/await 2... ${valor +1}`)

    await esperarPor(2000)
    console.log(`Async/Await 3... ${valor + 2} `) //C/ await


    return valor + 3

}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}
executar().then(console.log)