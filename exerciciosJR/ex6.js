/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. */


function jurosSimples(capitalInicial, taxaDeJuros, tempoAplicacao){
   let calcularJuros =  capitalInicial * taxaDeJuros * tempoAplicacao
   console.log("Regime de aplicação Juros Simples, o juros é equivalente a " + calcularJuros)

}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoAplicacao){
    let calcularJuros =  capitalInicial * (1 - taxaDeJuros) ** tempoAplicacao
    
   console.log("Regime de aplicação Juros Compostos, o juros é equivalente a " + calcularJuros)

    //ex corrigido pela CODER.ORG
}

jurosSimples(100, 10/100, 2)
jurosCompostos(100, 10/100, 2)