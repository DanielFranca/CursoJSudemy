const nome = "daniel";

console.log(nome.charAt(2))  //busca a letra correspondente a posição buscada entre parenteses
console.log(nome.charAt(5))
console.log(nome.charCodeAt(3)) //buscou na tabela ASC o valor associado ao caractere declarado entre parenteses
console.log(nome.indexOf('n')) // nesse método buscamos a posição da letra declarada na String, caso a letra não seja encontrada retorna -1, caso seja
//encontrada retorna a posição onde a letra se encontra na String. No caso acima retorna a posição 2.
console.log(nome.substring(2)) // nesse método podemos imprimir a variavel a partir da posição 2 e o que vem anteriormente não é retornado.
console.log(nome.substring(1, 3)) // nesse caso, ele imprime do 1 ao 3, excluindo as posições 0, 4, 5.
console.log('Escola ' .concat(nome).concat("!")) //Concatena o valor das constante com a saída do código
console.log(nome.replace(3, 'e')) // Substitui o 3 pela letra 'e', ou seja a função do replace é de atribuir ou substituir um valor dentro da string.

console.log('ana, maria, pedro'.split(',')) // gera um arrray separdo por vírgulas
