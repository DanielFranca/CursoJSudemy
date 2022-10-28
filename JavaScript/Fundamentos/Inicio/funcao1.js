// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //retorna 5
imprimirSoma(2) //NaN =  not a number
imprimirSoma(2, 1, 2, 2, 1, 2, 5, 4) // soma os dois primeiros numeros e ignora o resto
imprimirSoma() //NaN

//Função com retorno

function soma(a, b = 0){
    return a + b;
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())