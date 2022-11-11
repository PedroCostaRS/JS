// exemplo de função sem retorno
function imprimirSoma(a, b) {

    console.log(a + b)

}

imprimirSoma(2, 3) // executa a função
imprimirSoma() // Retorna NaN (Not a Number)
imprimirSoma(2, 3, 5, 8) // soma apenas os valores do parâmetro e ignora o resto

// Função com Retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(1, 2))  // retorna a soma
console.log(soma(2)) // retorna o valor pois foi tratado o segundo