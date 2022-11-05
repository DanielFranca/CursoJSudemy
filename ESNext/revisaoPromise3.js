function gerarNumeroEntre(min, max) {
    if(min > max) {
       [max, min] = [min, max]
        
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        reosolve(aleatorio)
    })
}

gerarNumeroEntre(10, 30).then(console.log)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)