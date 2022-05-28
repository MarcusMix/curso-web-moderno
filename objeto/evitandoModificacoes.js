const produto = Object.preventExtensions({
    nome: 'Marcus', preco: 199, tag: 'lindo de mais'
})

console.log('Extensível: ', Object.isExtensible(produto))


produto.nome = 'Marcus 2°'
produto.descricao = 'outra coisa?'
delete produto.tag

console.log(produto)


const pessoa ={ nome: 'marcus', idade: 20}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)