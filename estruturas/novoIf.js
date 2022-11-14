function teste1(numero) {
    if (numero > 7)
        console.log(numero) // está associada ao if]


    console.log('Final')// está fora do bloco, sempre será executado
}

teste1(6)
teste1(8)

function teste2(numero) {
    if (numero > 7); { // o ponto e vírgula quebra o bloco, não use
        console.log(numero)
    }
}

teste2(6)
teste2(8)