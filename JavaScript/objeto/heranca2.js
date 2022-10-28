// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z' // Não fazer isso!
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // filho encontra todos os atributos
console.log(pai.attr0, pai.attr1, pai.attr2, pai.attr3) // pai encontra seu atribuito + avo + attr0
console.log(avo.attr0, avo.attr1, avo.attr2, avo.attr3) // avo só encontra o atributo de attr0 e o seu

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing / sombrear
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)  //ferrari tem carro como seu protótipo 
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(200)
console.log(ferrari.status())
