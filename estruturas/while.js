function getInteiroAleatorioEntre(minimo, maximo) {
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {

    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Retorno aleatório é: ${opcao}.`)

}

console.log('Final do código.')