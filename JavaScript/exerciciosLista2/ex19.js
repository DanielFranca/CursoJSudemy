/* Faça uma função~que receba a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas 
decimais, arredondando se necessário. */

function calcularTriangulo(base, altura){
    const area = (base * altura) % 2
    
    return area.toFixed(2)
}
console.log(calcularTriangulo(100.0, 30.0))