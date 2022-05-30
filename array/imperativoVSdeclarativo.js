const alunos = [
    { nome: 'joao', nota: 9},
    { nome: 'maria', nota: 9.2}
]

//imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//declarativo
const Nota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(Nota).reduce(soma)

console.log(total2 / alunos.length)