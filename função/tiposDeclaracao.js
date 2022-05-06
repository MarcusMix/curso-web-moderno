console.log(nomeFuncao(9, 5))

// function declaration
function nomeFuncao(x, y) {
    return x + y - x * y
}

// function expression
const nomeConstante = function (x, y) {
    return x / y
}

console.log(nomeConstante(7, 9))

// named function expression
const nomeConstante2 = function nomeConstante(x, y) {
    return x * y
}

console.log(nomeConstante2(100, 100))