let num1 = 1
let num2 = 2

num1++ // pós fixado
console.log(num1)

--num1 // pré fixado, maior prioridade
console.log(num1)

console.log(++num1 === num2--)
// incrementa num1, compara com num2, depois da comparação decrementa num2


console.log(num1 === num2) // agora são diferentes