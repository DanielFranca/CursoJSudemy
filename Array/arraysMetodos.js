const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // exclui o ultimo indice do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) //  adiciona verstappen ao último indice do array

pilotos.shift() //remove o primeiro indice do array
console.log(pilotos) 

pilotos.unshift('Hamilton') //Adiciona Hamilton como primeiro índice do array
console.log(pilotos)


//splide explicado em array.js == adiciona e remove elementos

const AlgunsPilotos1 = pilotos.slice(2) // NOVO ARRAY
console.log(AlgunsPilotos1)

const AlgunsPilotos2 = pilotos.slice(1, 4) //cria um array que pega os indices entre 0 e 4 (1, 2, 3) deixando 0 e 4 de fora
console.log(AlgunsPilotos2)

