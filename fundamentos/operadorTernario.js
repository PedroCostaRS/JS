// composto por três partes
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// resultado é uma função
console.log(typeof resultado)

// nota >= 7        é o primeiro operador
// ? 'Aprovado'     é o segundo operador
// : 'Reprovado'    é o terceiro operador

// atribui valor a função
console.log(resultado(8))