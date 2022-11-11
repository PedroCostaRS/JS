const nome = 'Rebecca'

const concatena = "Olá " + nome + "!" // forma antiga para se concatenar string

const template = `
    Olá
    ${nome}!`

    /*
    * forma onde tudo que está entre crase é considerado na string
    * implementado a partir do ecmascript 'js' 2015
    * 
    *  o símbolo do dólar e chaves interpola/interpreta strings
    *  tudo dentro dessa superfunção é interpretado, seja soma, string ou array
    *  chamada de método, funções ou qualquer que seja a expressão
    */

console.log(concatena, template),

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up("cuidado")}!`) // chama a função up que converte texto para maiúsculo