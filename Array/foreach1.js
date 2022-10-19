const aprovados = ['Agatha', 'Bruno', 'Daniel']

aprovados.forEach(function(nome, indice, array) { // callback
    //indice é sempre passado como segundo parametro, e array como terceiro
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
});

aprovados.forEach(nome => console.log(nome))


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)