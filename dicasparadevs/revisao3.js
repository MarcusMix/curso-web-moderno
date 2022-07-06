const numeros = [1, 2, 3, 4, 5];

const numerosMultDois = numeros.map(function(numeros) {
    return numeros * 2;
})

console.log(numerosMultDois);


// const idades = [8, 12, 15, 22, 45, 80, 36];

// const idadesPares = idades.filter(function(idades) {
//     return idades % 2 === 0;
// })

// console.log(idadesPares);

// const idades = [8, 12, 15, 22, 45, 80, 36];

// const total = idades.reduce(idadesTotal, 0);
// function idadesTotal(idades, acumulador) {
//     return idades + acumulador;
// }

// console.log(total);

let acumulador = 0;
for(let i = 0; i < 50; i++) {
     acumulador += i;
}

console.log(acumulador);