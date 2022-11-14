function boaNoticia(nota) {

    if (nota >= 7 && nota < 8) {
        console.log('Aprovado na média. sua nota é: ' + nota)
    } if (nota >= 8 && nota < 9) {
        console.log('Bem Aprovado. sua nota é: ' + nota)
    } if (nota >= 9 && nota < 10) {
        console.log('Aprovadasso. sua nota é: ' + nota)
    } if (nota >= 10) {
        console.log('Gênio. sua nota é: ' + nota)
    }

}

boaNoticia(9)


function seForVedade(valor) {
    // bom para testar se alguma variável está ou não vazia
    // estando vazia, será ignorada, estando preenchida, entra
    if (valor) { // testa se é verdadeiro
        console.log('É verdade... ' + valor)
    }
}

seForVedade()
seForVedade(null)
seForVedade(undefined)
seForVedade(NaN)
seForVedade('')
seForVedade(0)
seForVedade(-1)
seForVedade(' ')
seForVedade('?')
seForVedade([])
seForVedade([1, 2])
seForVedade({})
seForVedade()