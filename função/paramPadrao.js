function soma1(a, b, c) { // estrategia 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))


function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // estrategia 2
    b = 1 in arguments ? b : 1 // estrategia 3
    c = isNaN(c) ? 1 : c // estrategia 4
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))


function soma3(a = 1, b = 1, c = 1) { // estrategia 5 mais facil
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
