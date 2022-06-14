let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['marcus', 'lindo', 'cheiroso'])
})

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['ana', 'beatriz' , 'carlos'])
})
p
.then(valor => console.log(valor))
.then(primeiro => console.log(valor))
