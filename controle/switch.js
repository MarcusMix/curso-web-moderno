const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Quadro de Honra " + (nota))
            break
        case 8: case 7:
            console.log("Aprovado " + (nota))
            break
        case 6: case 5: case 4:
            console.log("Reprovado " + (nota))
            break
        default:
            console.log("Nota Invalida" + (nota))
    }

}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(0)
imprimirResultado(7.8)
