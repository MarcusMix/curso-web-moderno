function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "cigarro de madame",
    preco: 45,
    desc: 0.05,
    getPreco
}

global.preco = 20
global.desc = 0.05
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 99.000, desc: 0.05 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.05, "$"))
console.log(getPreco.apply(carro, [0.05, "rublos"]))