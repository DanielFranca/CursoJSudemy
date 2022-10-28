/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos:
caso maçã, retorne no console:  "Não vendemos esta fruta aqui". Caso kiwi, retorne "Estamos com escassez de kiwis". 
Caso melancia, retorne: "Aqui está, são 3 reais o quilo" */

function frutas(fruta){

    switch(fruta){
        case 'kiwi': 
        console.log(" Estamos com escassez de kiwis.")
        break

        case 'melancia':
        console.log("Aqui estão, são 3 reais o quilo.")
        break

        case 'maçã':
        console.log("Não vendemos essa fruta aqui.")
        break

            default:
                console.log("Desculpe algo deu errado!")
    }
     //ex corrigido pela CODER.ORG
}

frutas('kiwi')
frutas('maçã')
frutas('melancia')
frutas('alcatra')