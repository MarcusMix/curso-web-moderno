//ES8: Object.values / Object.entries

const { some } = require("lodash")

const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi feios'
    }
}


console.log(pessoa.nome, pessoa.ola())

//class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar())