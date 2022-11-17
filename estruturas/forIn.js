const notas = [1.5, 2.3, 5.5, 7.0]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Laura',
    sobrenome: 'Costa',
    idade: 13,
    peso: 78
}

// atributo de pessoa pode ser criado como qualquer coisa
// JS é flexível e percorre atributos diretamente
for (atributoDePessoa in pessoa) {
                // referência ao nome do atributo
    console.log(`${atributoDePessoa} = ${pessoa[atributoDePessoa]}`)
                                        // referência ao dado armazenado no atributo
}