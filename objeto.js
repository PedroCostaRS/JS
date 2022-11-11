const prod = {} // cria o objeto vazio
prod.nome = 'Celular Ultra'
prod.preco = 5950.60

console.log(prod)

prod['Desconto Legal'] = 0.40  // evitar atributos com espaço

console.log(prod)

/*
 *Segunda forma de criar um objeto em JS
 */

const prod1 = {
    nome: 'Camisa',
    preco: 79.80
}

console.log(prod1)

 // JSON - formato textual de objetos
 // '{"nome": "Camisa Polo", "preco":79.90}'

