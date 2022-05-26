const pai = { nome: 'pedro' ,  corCabelo: 'preto'}

const filha = Object.create(pai)

filha.nome = 'ana'

console.log(filha.corCabelo)