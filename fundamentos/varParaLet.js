let numero = 1

{
    let numero = 2
    console.log(numero)
    // let respeita escopo de bloco e não sobrescreve
}

console.log(numero) // respeita o escopo global