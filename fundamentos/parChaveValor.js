// par nome/valor
const saudacao = 'opa' // contexto lexico 1

function exec() {

    const saudacao = 'Falaa' // contexto lexico 2 
    return saudacao
}

// objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 29,
    peso: 80.050,
    endereco: {
        logradouro: 'Fazenda Pindaíba',
        nro: 'Zona Rural'
    }
}

// retorno de resultados
console.log(saudacao)
console.log(exec()) // respeita a criação local
console.log(saudacao) // respeita a criação global sem sobrescrever pela função
console.log(cliente)
