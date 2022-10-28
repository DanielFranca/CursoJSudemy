/* Crie uma função que recebe um número de 1 a 12 e retorne o mês correspondente com uma String. Por exemplo, se a entrada
for 2, a função deverá retornar "fevereiro", pois este é o 2º mês. */

function verificaMes(mes){
   
    if(mes > 1 && mes <= 12){
    } else {
        console.log('mês inválido')
    }
    switch (mes) {
        case 1:
            console.log('janeiro')
            break
        case 2 :
            console.log('fevereiro')
            break
        case 3:
            console.log('março')
            break
        case 4:
            console.log('abril')
            break
        case 5:
            console.log('maio')
            break
        case 6: 
            console.log('junho')
            break
        case 7:
            console.log('julho')
            break
        case 8:
            console.log('agosto')
            break
        case 9:
            console.log('setembro')
            break
        case 10:
            console.log('outubro')
            break
        case 11:
            console.log('novembro')
            break
        case 12:
            console.log('dezembro')
            break
    }
}

verificaMes(13)
verificaMes(0)
verificaMes(1)
verificaMes(2)
verificaMes(3)
verificaMes(4)
verificaMes(5)
verificaMes(6)
verificaMes(7)
verificaMes(8)
verificaMes(9)
verificaMes(10)
verificaMes(11)
verificaMes(12)