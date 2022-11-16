let contador = 1

while (contador <= 10) {

    console.log(`O contador atual é: ${contador}`)
    contador++

}

// for simples, declarado como no JAVA
for (let i = 1; i <= 10; i++) {

    console.log(`O contador atual é: ${i}`)
}

// lendo arrays
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++) {

    console.log(`A nota ${i + 1} é: ${notas[i]}`)

}