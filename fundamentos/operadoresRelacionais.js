console.log('1' == 1) // testa igualdade
console.log('1' === 1)// estritamente igual
console.log('1' != 1) // diferente
console.log('1' !== 1)// estritamente diferente

console.log(3 < 2) // menor que
console.log(3 > 2) // maior que
console.log(3 <= 2)// menor ou igual a
console.log(3 >= 2)// maior ou igual a

const d1 = new Date(0)
const d2 = new Date(0)
console.log(d1 === d2)// estritamente igual
console.log(d1 == d2) // igual a
console.log(d1.getTime() === d2.getTime()) // estritamente igual a
console.log(d1.getTime() == d2.getTime())  // igual a

console.log(undefined == null) // igual a
console.log(undefined === null)// estritamente igual a