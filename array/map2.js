const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}'
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj)
console.log(resultado) 