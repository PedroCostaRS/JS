function tratarErroELancar() {
    throw 'Erro em verificação.'
}

function imprimirNomeGritado(obj) {

    try {
        console.log( obj.nome.toUppercase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'Pedro' }
imprimirNomeGritado(obj)

