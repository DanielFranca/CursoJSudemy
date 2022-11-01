// middleware pattern (chain of responsabu)
// ctx = contexto

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&  // verifica se o indice está setado, verifica se o indice é menor que o tamanho do array, então ok, ele executa chama o indice mais 1 e chama o passo2.
    middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0) // dispara a execução a partir do passo 0
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx) 