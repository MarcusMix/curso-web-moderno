function soma(a, b) {
    return a + b
}


function sub(a, b) {
    return a - b
}



function mult(a, b) {
    return a * b
}



function div(a, b) {
    return a / b
}


// tentativa acima  
function calcularTudo(n1, n2) {
    console.log(soma(n1, n2), sub(n1, n2), mult(n1, n2), div(n1, n2))
}
// gabarito abaixo 

function calcularOperacoes(operador1, operador2) {
    console.log(operador1 + operador2, operador1 - operador2, operador1 * operador2, operador1 / operador2);
}

calcularOperacoes(10, 2.5)
calcularTudo(10, 2.5)

