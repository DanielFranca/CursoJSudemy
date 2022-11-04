//tagged template - processa o template dentro de uma função


function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //se não for um número retorna o próprio valor, se for um valor número aplica uma máscara colocando R$, e pulando duas casas decimais.
        resultado.push(partes[indice], valor) 
    })
    return resultado.join('')
}

const precp = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)