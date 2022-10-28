/* Crie uma função que irá receber dois valores, o dividendo e o divisor.
A função deverá imprimir o resultado e o resto da divisão destes dois 
valores */

function dividendoDivisor(dividendo, divisor) {
  let resultado = Math.floor(dividendo / divisor);
  let resto = dividendo % divisor;

  console.log("resto: " + resto);
  console.log("resultado: " + resultado);

  //ex corrigido pela CODER.ORG
}

dividendoDivisor(9, 3);
