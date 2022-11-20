// estratégias para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0,)) // retorna false e soma valor 1

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // estritamente diferente
    // a = a != undefined ? a : 1 // undefined ou nulo diferente
    b = 1 in arguments ? b : 1  // b está recebendo o índice do array
    c = isNaN(c) ? 1 : c // forma mais segura desses tipos
    return a + b + c
}


console.log(soma2(), soma2(3), soma2(1, 2, 3))
console.log(soma2(0, 0, 0))


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// forma mais correta de definir valor padrão
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3))
console.log(soma3(0, 0, 0))