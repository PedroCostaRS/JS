let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log(!isAtivo) // nega o tipo e valida para tipo booleano 
console.log(!!isAtivo) // nega a negação colocando como verdadeiro

console.log("tipos verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('tipos falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('finalizando')
console.log(!!('' || null || 0 || ' ')) // testa se uma das opções é verdadeira com ou ||

let nome = 'Pedro'
console.log(nome || 'Desconhecido') // testa se a string tem conteúdo válido, se sim, imprime, senão, imprime Desconhecido