const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}


console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '23/12/2001'
})

//object.assign (ecmascript 2015)
const destino = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2)

Object.freeze(obj) //congelou
obj.c = 12345 // n vai atribuir novo valor
console.log(obj)