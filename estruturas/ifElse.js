const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(6)
imprimirResultado('teste') // vai rodar, mas é quebra de código