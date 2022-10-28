// Crie uma função que retorna a String Olá, concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

function saudacao(text) {
    const cumprimento = "Olá "
    const resultado = cumprimento.concat(text + "!");
    console.log(resultado)
} 

saudacao("tudo bem?")