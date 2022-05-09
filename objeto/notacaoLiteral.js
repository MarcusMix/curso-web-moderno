const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
// jeito antigo
const obj2 = { a, b, c}
// jeito moderno

const nomeAtributo = 'nota'
const valorAtributo = 9.09

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj4)

const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // jeito antigo
    },
    funcao2() {
        //jeito moderno
    }
}