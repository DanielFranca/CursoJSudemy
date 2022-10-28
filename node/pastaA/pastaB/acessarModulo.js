const moduloA = require('../../moduloA') // saiu da pasta B, saiu da pasta A e foi buscar o modulo A nos arquivos.
// em contrapartida eu poderia também copiar o path e passar a constante assim: const moduloA = require('C:\Users\Danie\OneDrive\Documentos\CursoJSudemy\node\moduloA.js')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola)

// const http = require('http')
//     http.createServer((req, resp) => {
//         resp.write('Bom dia!')
//         resp.end()
//     }).listen(8080)

