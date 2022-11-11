var numero = 1
{
    var numero = 2 //Como não existe escopo de bloco, ignora o anterior e sobrescreve
    console.log('dentro = ', numero)
}

console.log('fora = ', numero) //imprime número 2, pois foi sobrescrito