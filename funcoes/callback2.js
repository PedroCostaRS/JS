const notas = [7.7, 6.5, 6, 5.2, 3.8, 7.1, 9.0]

// sem uso de callback
let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
let notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// com arrow function
let notasBaixas3 = notas.filter(nota => nota > 7)
console.log(notasBaixas3)


//usando uma arrow function anterior para fazer apenas o filtro depois
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)