// first-class object (function em JS - Citizens)
// higher-order function

// criar de forma literal
// pode ou não retornar valor, se não retornar é undefined
// para função o bloco é obrigatório, exceto para arrow function
function fun1() { }


// pode ser armazenada em variável
// passa-se uma função anonima
const fun2 = function () { }

// pode ser armazenada em array
const array = [function (a, b) { return a + b }, fun1(), fun2()]
console.log(array[0](2, 3)) // chama a função de soma


// pode ser armazenada em atributo de objeto
// mesmo que o atributo não exista
const obj = {}
obj.falar = function () { return 'E aí' }
console.log(obj.falar())

// pode ser passada como parâmetro para outra função
function run(fun) { 

    fun()

}