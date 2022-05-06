function soma() {
    let soma = 1
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 8, 1999))
console.log(soma(1, 9878, 89786, " concatena"))