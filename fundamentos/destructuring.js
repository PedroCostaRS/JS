const pessoa = {

    nome: 'Pedro',
    idade: 29,
    endereco: {
        logradouro: 'Fazenda Pindaiba',
        numero: 'Zona Rural'
    }

}

const { nome, idade } = pessoa
// tire do objeto pessoa os atributos nome e idade
console.log(nome, idade) // exibe os atributos

const { nome: names, idade: age } = pessoa
//atribui nome e idade do objeto pessoa para as variáveis names e age
console.log(names, age)

const { sobrenome, bomHumor = true } = pessoa
console.log(sobrenome, bomHumor)
// pode ser atribuido valor padrão como o exemplo do bomHumor

const { endereco: { logradouro, numero, cep = '00.000-000' } } = pessoa
// sempre vai desestruturar as chaves internas
// no caso, logradouro e numero
// pode-se criar novos atributos com valor padrão, como foi criado CEP
console.log(logradouro, numero, cep)

