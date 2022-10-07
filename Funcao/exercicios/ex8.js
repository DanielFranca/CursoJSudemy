/* Pedro joga N basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere
se o mesmo é maior ou menor que seu melhor e pior desemprenho. Dada uma lista string = "pontuação1 pontuação2 pontuação3 etc...", escreva
uma função que ao recebê-la irá comparar os valores um a um e irá retornarum vetor com o número de vezes que ele bateu seu recorde
de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). 

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: "10 20 20 8 25 3 0 30 1"
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)*/


const lista = "1, 2, 3, 9, 8, 0, 5, 4, 3, 0" 

function comparaPontuacao(lista) {
    let pontuacoes = lista.split(", ")
    let qtdeQuebradaDeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdeQuebradaDeRecordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }

        //ex corrigido pela CODER.ORG
    }
    return [qtdeQuebradaDeRecordes, piorJogo]
}

console.log(comparaPontuacao(lista))
        
