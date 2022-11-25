let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {

}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(module.exports) // aqui sim é igual ao this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// arrow function sempre têm precedência e maior relevância