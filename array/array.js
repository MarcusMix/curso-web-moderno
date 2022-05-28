// array sao objetos no JavaScript

console.log(typeof Array, typeof new Array, typeof [])

// boas praticas ultilizar array com dados homogeneos

let aprovados = new Array('Marcus', 'Sandie', 'Milena')
console.log(aprovados)

aprovados = ['Milena', 'Bruno', 'Gui']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined

aprovados[3] = 'Paulo'

// mais comum substuição

aprovados.push('Ari')

console.log(aprovados.length)
console.log(aprovados[4])
aprovados[9] = 'João'

console.log(aprovados)

aprovados.sort() // ordem A-Z ou númerico
console.log(aprovados)

delete aprovados[1]

console.log(aprovados)
console.log(aprovados[1])

aprovados.push('Putao')

console.log(aprovados)
aprovados = ['Milton', 'Brolol', 'Gustavo']

aprovados.splice(2,1 ,'elemento' ,'elemnto2')

console.log(aprovados)

