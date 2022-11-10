// é uma estrutura indexável com índice inicial 0
// é heterogêneo e flexível

// criação de forma literal separados por vírgula
const valores = [5.5 , 5.1, 6.3, 9.2]
console.log(valores[4]) // não gera erro, mas significa que o código está quebrado

valores[4] = 'texto' // pode ser atribuído valor string em um array que inicialmente era number
console.log(valores)

console.log(valores.pop()) //deleta o último valor
delete valores[0] // deleta a partir do índice

console.log(typeof valores) // arrays são objetos