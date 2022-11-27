function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    // outro metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    this.frear = function () {
        if (velocidadeAtual - delta >= 0) {
            velocidadeAtual -= delta
        } else {
            velocidadeAtual = 0
        }
    }


}

const uno = new Carro

console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.frear()
console.log(uno.getVelocidadeAtual())


// cria objeto ferrari
const ferrari = new Carro(350, 20)

console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.frear()
console.log(ferrari.getVelocidadeAtual())
