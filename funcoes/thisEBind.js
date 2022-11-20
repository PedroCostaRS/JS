const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // acessa o atributo através de uma função anonima
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflitou entre paradigma funcional e OO

// resolvendo o problema com o bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Sempre que this for referenciado, o bind será o dono do objeto
// quando isso for feito, a constante torna-se uma função