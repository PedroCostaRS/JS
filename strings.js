const escola = "Sockel"

console.log(escola.charAt(4)) // como inicia no 0 retorna o quinto elemento 
console.log(escola.charAt(6)) // se não encontra retorna valor vazio
console.log(escola.charCodeAt(3)) // exibe o código unicode do caracter

console.log(escola.substring(1)) // exibe a partir do caracter selecionado
console.log(escola.substring(1,4)) // exibe a partir do caracter 1 até o 3

console.log('Escola '.concat(escola).concat("!"))  // função para concatenar
console.log(escola.replace('k', 'K')) // substitui o k minúsculo por um maiúsculo

console.log('Ana, Maria, João'.split(',')) // Transforma a string em Array a partir da vírgula
