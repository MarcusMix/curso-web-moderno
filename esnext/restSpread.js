//spread com objeto
const funcionario = { nome: 'maria', salario: 1299.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//spread com array 
const grupoA = ['joao', 'pedrin', 'marcus', 'milena']
const grupoFinal = ['Ari', ...grupoA, 'Guilherme']
console.log(grupoFinal)