function compras(trabalho1, trabalho2) {

    const comprarSorvete = trabalho1 || trabalho2 // or
    const comprarTv50 = trabalho1 && trabalho2 // and
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unário, negação

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
    // retorno de chave valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
