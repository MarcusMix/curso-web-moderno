function triangulo(lado1, lado2, lado3) {


if(lado1 == lado2) {
   if(lado3 == lado2) {
    console.log("é equilatero");
   } else {
    console.log("é escaleno");
   }
    
} else if(lado2 == lado3 || lado1 == lado3) {
    console.log("é escaleno");
} else {
    console.log("é isoceles");
}

}

triangulo(10, 10, 10)
triangulo(10, 10, 5)
triangulo(10, 5, 10)
triangulo(5, 10, 10)
triangulo(4, 7, 10)
