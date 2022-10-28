const imprimirResultado = function (nota) {
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')  /* Será executado normalmente por ser uma linguagem de tipagem fraca, com isso não importa o tipo, 
ele executará independentemente se a variável é de tipo diferente.*/