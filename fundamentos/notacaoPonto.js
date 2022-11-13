console.log(Math.ceil(6.1)) // arredonda para cima
console.log(Math.floor(6.1))// arredonda para baixo

const obj = {}
obj.nome = 'bola' // através do ponto gera um novo atributo ao objeto
console.log(obj.nome)

obj['nome'] = 'Bola2' // pode ser usado, mas é mais trabalhoso que o ponto
console.log(obj.nome)

function Obj(nome) {
    this.nome = nome // insere atributo em uma função
    // o this torna o atributo publico

    this.exec = function () {
        console.log('Executado.') //a partir do this. pode se criar uma
        //função dentro de função, pode se criar objetos e atributos 
    }

}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() // chama a função exec() dentro da função Obj()