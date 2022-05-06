const carros = ["gol bola", "palio", "celta"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

carros.forEach(imprimir)
carros.forEach(carros => console.log(carros))