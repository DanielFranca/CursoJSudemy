/* O cardápio de uma lanchonete é o seguinte:

Código       Descrição do produto       Preço

100           Cachorro quente           R$ 3,00
200           Hambúrguer simples        R$ 4,00
300           Cheeseburguer             R$ 5,50
400           bauru                     R$ 7,50
500           refrigerante              R$ 3,50
600           suco                      R$ 2,80

Implemente uma função que receba como parâmetro o código do item pedido,
a quantidade e calcule o valor a ser pago por aquele lanche. Considere
que a cada execução somente será calculado um item. Use o comando switch.
Crie um caso default para produto não existente.

*/

function cardapio(cod, quantidade){
    switch(cod){
        case 100:
            return quantidade * 3.00
        case 200:
            return quantidade * 4.00
        case 300:
            return quantidade * 5.50
        case 400:
            return quantidade * 7.50
        case 500:
            return quantidade * 3.50
        case 600:
            return quantidade * 2.80
            default:
                return "Produto não existente."
    }
    //ex corrigido pela CODER.ORG
}


console.log(cardapio(100, 3))
