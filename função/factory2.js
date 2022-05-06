function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: "10%"
    }
}

console.log(criarProduto("piroca borracha", 40.99))
console.log(criarProduto("bolacha", 0.99))