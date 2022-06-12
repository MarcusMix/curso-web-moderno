const sequece = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequece.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProduto() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos}