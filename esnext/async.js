// recurso ES8

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} 

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))