// novos exemplos de callback

// adicionado no browser faz a chamada quando clicado dentro do body
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu')
}