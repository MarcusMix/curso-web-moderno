function area( largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
     } else {
         return area
     }

    }



function area( largura, altura) {
    const area = largura * altura
    if (area < 20) {
        console.log(`Valor permitido: ${area}m2`)
     } else {
         return area
     }

    }

console.log(area(4, 2))
console.log(area(4, 8))