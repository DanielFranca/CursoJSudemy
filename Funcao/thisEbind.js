const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // responsável por apontar para um objeto para ele ser o dono da execução desse método sempre que ele for chamado
falarDePessoa()

const falar2 = pessoa.falar
falar2()