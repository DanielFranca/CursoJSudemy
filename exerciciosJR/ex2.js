/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados Iguais.
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificaçaõ
quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência 
de um triângulo).*/

function lados (ladoA, ladoB, ladoC) {
   

    if(ladoA == ladoB && ladoB == ladoC){
        return "Triângulo Equilátero"
    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        return "Triângulo Isósceles!"
    }else{
        return "Triângulo Escaleno!"
    }

    //ex corrigido pela CODER.ORG
}

console.log(lados(2, 2, 2))

console.log(lados(1, 2, 2))

console.log(lados(1, 2, 3))