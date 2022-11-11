// efeito de poder declarar uma variável após o uso

console.log("a = ", a) // mostra que a variável como undefined
var a = 2
console.log('a = ', a)

// efeito de içamento não vale para LET