/*
///////////////////////////////////
Não vai rodar pois o this está chamando setInterval

function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
*/

/*
////////////////////////////
usando apenas o bind, sem a const vai funcionar
function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)  
}

new Pessoa
*/

// converte o this em uma constante e seta ele como padrão
// método mais utilizado e preciso
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)  
}

new Pessoa