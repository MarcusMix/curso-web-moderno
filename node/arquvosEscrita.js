const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 12.222,
    desconto: 0.1
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo')
})