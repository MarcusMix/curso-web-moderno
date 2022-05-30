const alunos = [
    { nome: 'Joao', nota: 9, bolsista: false},
    { nome: 'Maria', nota: 7.4, bolsista: true},
    { nome: 'Cleb', nota: 8.4, bolsista: false},
    { nome: 'Olavo', nota: 7.6, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado,bolsita) =>  resultado || bolsita
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 