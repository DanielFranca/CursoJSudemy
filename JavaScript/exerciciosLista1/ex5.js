/* Lidar com número em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando 
faz o seguinte comando no console.log(0.1 + 0.2); O resultado será: 0.30000000000...4. outra coisa 
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, 
vamos fazer um exercício simples para msotrar dinheiro sempre da forma corrreta. Desenvolva uma função
JS para que ela receba um valor como 0.30000000000...4 e retorne R$0,30 (observe a vírgula e o ponto).*/


function trasnformarValorEmDinheiro(valor) {
    
    let transforma = valor.toFixed(2)
    console.log('R$: ' + transforma.toString().replace(".", ","))

     //ex corrigido pela CODER.ORG
}

mostrarDinheiro(0.30)