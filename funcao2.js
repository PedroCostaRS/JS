// Armazenando uma função em uma variável/constante

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b  // arrow function eliminando return 

console.log(subtracao(3, 2))