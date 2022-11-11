let a = 0

for (let i = 0; i <= 10; i++) {

    console.log(i)
    a = i
}

console.log('i = ', a) // let usa escopo do bloco, 
console.log('i = ', i) // Usa escopo do bloco, gerando assim um erro de execução
