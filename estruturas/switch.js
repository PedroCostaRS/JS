const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            console.log(nota)
            break
        case 8: case 7:
            console.log('Aprovado')
            console.log(nota)
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            console.log(nota)
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            console.log(nota)
            break
        default:
            console.log('Nota inválida')
            console.log(nota)
    }
}

imprimirResultado(8.9)
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//                  evitar uso de case no código                   //