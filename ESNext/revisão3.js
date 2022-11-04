// ES8: Object.values/Object.entries


const obj = {a: 1, b: 2, c: 3, d: 4}
console.log(Object.values(obj)) //retorna os valores do objeto
console.log(Object.entries(obj)) // retorn uma matriz com chave e valor

//Melhorias na notação literal

const nome ='carla'
const pessoa = {
    nome, 
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())


//Class

class Animal{}
class Cachorro extends Animal {
    falar() {
        return 'au au'
    }
}

console.log(new Cachorro().falar())