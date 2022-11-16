function getInteiroAleatorioEntre(minimo, maximo) {
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

let opcao = 0

// mesmo que a opcao seja iniciada com -1 ele executa o código ao menos uma vez

do {

    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Retorno aleatório é: ${opcao}.`)

} while (opcao != -1)

console.log('Final do código.')