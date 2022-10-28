/* Desenvolva uma função que recebe dois numeros inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação
deles. porém não utilize o operador de multiplicação */

function multiplica(num1, num2){
    let resultado = 0

    if(num1 || num2 < 0){
        return false
    } else {
        for(let i = 0; i < num2; i++)
            resultado += num1
        return resultado
    }
}
console.log(multiplica(5, 5))