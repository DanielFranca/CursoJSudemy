const imprimirResultado = function (nota) {
    
    switch (Math.floor(nota)) {
        case 10:
        
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 5: case 6: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            
            
    }
}

imprimirResultado(10)
imprimirResultado(5)