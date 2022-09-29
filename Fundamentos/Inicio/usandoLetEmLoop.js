for(let i = 0; i<10; i++){
    console.log('i=', i) //executa até aqui
}
console.log(i) //não executa porque let é uma constante inalteravel, e por conta do console estar fora do bloco não é possível interpreta-lo.