const usuario = {
    nome: 'daniel',
    sobrenome: 'frança',
    numero: 1195555-5555,
    email: 'danieldaniel@gmail.com'
}

console.log(prod.nome)

// ao invés do citado acima, usaremos o factory

function criarUsuario() {
    return {
        nome: 'daniel',
        sobrenome: 'frança',
        numero: 1195555-5555,
        email: 'danieldaniel@gmail.com'
    }
}

console.log(criarUsuario())

// funçaõ que retorna como resposta um objeto