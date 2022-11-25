const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {// operação ou soma
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(3, 5, soma)

imprimirResultado(2, 3, function (a, b) { // pode ser passada função anonima como parâmetro
    return a - b
})

imprimirResultado(2, 3, (a, b) => a * b) // pode ser passada uma arrow function

// pode se usar uma função anônima dentro de um atributo de um objeto
// como no caso do falar
const pessoa = {
    falar: function () { //pode ser usado apenas com parêntesis e sem a palavra reservada function
        console.log('Olá usuário!')
    }
}

//para fazer a chamada, deve-se usar os parêntesis
pessoa.falar()