console.log(typeof Object) // executando uma função
console.log(typeof new Object) // executando um objeto
console.log(typeof new Object()) //instanciando um objeto

const Cliente = function () {
    // gera a função cliente vazia
}
console.log(typeof Cliente) // executando uma função
console.log(typeof new Cliente) // executando um objeto

class Produto { } // PADRÃO ES-2015 (ES6)
console.log(typeof Produto)       // função
console.log(typeof new Produto)   // objeto
console.log(typeof new Produto()) // objeto