{
    {
        {
            { var sera = 'Será que imprime?' }
        }
    }
}

console.log(sera) // Sim, pois quando declarado fora de função é global


// teste dentro de função
function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) // não imprime, pois variável declarada dentro de função é local
