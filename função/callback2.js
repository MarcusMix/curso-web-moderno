const notas = [7.7, 8.9, 10, 6.9, 1.1, 8.8, 0.8, 5, 9]

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3)