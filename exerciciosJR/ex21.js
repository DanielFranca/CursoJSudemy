/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos
pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) Crianças com menos de 10 anos pagam R$ 80; 2) Conveniados 
com idade entre 10 e 30 anos pagam R$ 50; 3) Conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima
de 60 anos pagam R$ 130*/

function valorPago(idade){
    if(idade < 10){
            console.log("Criança menor de 10 anos, o valor a ser pago é R& 80")
    }else if( idade > 10 && idade <= 30){
            console.log("Conveniados entre 10 e 30 anos, pagam R$ 50")
    }else if (idade > 30 && idade <= 60){
            console.log( "Conveniados entre 30 e até 60 anos, pagam R$ 95")
    }else if (idade > 60){
            console.log( "Conveniados acima de 60, pagam R$ 130")
    }

    // poderia ter usado return e somente o valor a ser pago... mas preferi o retorno com console.log para ficar mais compreensivel, e menos abstrato.
}
valorPago(8)
valorPago(20)
valorPago(40)
valorPago(65)