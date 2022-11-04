// não aceita repetição/não indexada

const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
//console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'Lucas'] // não irá imprimir lucas duas vezes, porque set é uma estrutura que nao aceita repetição
const nomesSet = new Set(nomes)
console.log(nomesSet)