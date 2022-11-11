const funcs = []

for (let index = 0; index < 10; index++) {
    funcs.push(function () {
        console.log(index)
    })
}

funcs[2]()
funcs[8]()

// usando var ele não acessa a função em cada iteração
// só respeita a ultima iteração
// Já com LET ele respeita todas as iterações