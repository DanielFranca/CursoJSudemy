const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //transforma obj em json

//console.log(JSON.parse("{a: 1, b: 2, c: 3")) = formato inválido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3")) formato inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // objeto gerado a partir de um json
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))