const alunos = [
    { nome: 'Joao', nota: 9, bolsista: false},
    { nome: 'Maria', nota: 7.4, bolsista: true},
    { nome: 'Cleb', nota: 8.4, bolsista: false},
    { nome: 'Olavo', nota: 7.6, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado) 