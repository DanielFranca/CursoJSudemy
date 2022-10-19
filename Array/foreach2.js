Array.prototype.forEach2 = function(callback) {
    for( let i=0; i < this.length; i++){
        callback(this[i], i, this) // [1] = indice do for, i = indice do proprio array, this= array completo
    }
}

const aprovados = ['Agatha', 'Bruno', 'Daniel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

