let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * 0
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui um parâmetro
console.log(ola())