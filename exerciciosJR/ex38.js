/* Escreva uma função que receba dois parâmetros inicio e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para inicio e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor   */


function impares (inicio, fim){
    for(let i = inicio; i < fim; i++){
        if(i % 2 == 0){
            console.log('\n')
        } else {
            console.log(`impar`, i)
        }
    }
}
impares(0, 100)
impares(100, 200)