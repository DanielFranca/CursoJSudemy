/* Um homem decidiu ir a uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui,
além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura Switch, caso o 
comprador queira o hatch, retorne: "Compra efetuada com sucesso". Nas outras opções, retorne: "Tem certeza que
não prefere este modelo?". Caso seja especificado um modelo que não esteja disponivel, retorne no console: 
"Não trabalhamos com este tipo de automóvel aqui". */

function comprarCarro(carro){

    switch (carro){
        case 'hatch':
            console.log("Compra efetuada com sucesso.")
        case "caminhonete":
            console.log(`tem certeza que não prefere esse modelo?`)
        case "motocicleta":
            console.log(`tem certeza que não prefere esse modelo?`)
        case "sedan":
            console.log(`tem certeza que não prefere esse modelo:?`)
            default:
                console.log("Não trabalhamos com este tipo de modelo!")
    }
     //ex corrigido pela CODER.ORG
    }

console.log(comprarCarro("hatch"))
console.log(comprarCarro("caminhonete"))
console.log(comprarCarro("motocicleta"))
console.log(comprarCarro("sedan"))
