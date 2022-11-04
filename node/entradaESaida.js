const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anonimo!\n') //stdout = saida padrao
    process.exit()
}else{
    process.stdout.write('informe o seu nome')
    process.stdin.on('data', data => { //acaba de pegar os dados do usuário, inclusive o 'enter' 
        const nome = data.toString().replace('\n', '') //salvamos numa constante o nome digitado para remover esse enter a usamos o replace, para substituir o \n por um espaço vazio

        process.stdout.write(`Fala ${nome}!! \n `)
        process.exit()
    })
}