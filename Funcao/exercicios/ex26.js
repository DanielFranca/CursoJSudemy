/* Fazer um programa para encontrar todos os pares de 1 a 100 */ 

function encontraPares(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log( i, "é par")
        }
    }
}
console.log(encontraPares())