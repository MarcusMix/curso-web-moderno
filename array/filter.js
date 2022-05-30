const produtos = [
    { nome: 'notebook', preco: 2600, fragil: true},
    { nome: 'ipad', preco: 7600, fragil: true},
    { nome: 'gol', preco: 90000, fragil: false},
]

console.log(produtos.filter(function(p) {
    return p.preco > 20000
}))

 const caro = produtos => produtos.preco >=500
 const fragil = produtos => produtos.fragil
 console.log(produtos.filter(caro).filter(fragil))