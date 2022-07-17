// new Promise((resolve, reject) => {
//     console.log('inicio');

//     resolve();
// })
// .then(() => {
//     throw new Error('algo deu errado');

//     console.log('faça isso');
// })
// .catch(() => {
//     console.log('faça aquli');
// })
// .then(() => {
//     console.log('faça isso indepedente do que aconteceu antes');
// });

// function calc (a) {
//     return a + 100;
// // }
// calc (a) => a + 100
// console.log();


// Função tradicional anonima
// (function (a, b) {
//     return a + b + 100;
//   })
  
//   // Arrow Function
 
  
//   // Função tradicional anonima (sem parâmetros)
//   const a = 4;
//   const b = 2;
//   (function () {
//     return a + b + 100;
//   })
  
//   // Arrow Function (sem parâmetros)
//   const c = 4;
//   const d = 2;
//   () => c + d + 100;


//   let calc = (x, y) => x + y + 100
//   console.log(calc(3, 5));

//   a => {
//     const b = 1;
//     return a + b;
//   }

// const obj = params => ({  foo: "a"});
// console.log(obj());

// const conta = (a=400, b=19, c) => a + b + 10;
// console.log(conta());


const array = [5, 6, 13, 0, 1, 18, 23, 28];


//somando todos os arrays
const sum = array.reduce((a, b) => a + b);
console.log(sum);

//pegando os pares
const even = array.filter(v => v % 2 == 0);
console.log(even);


//dobrando, multiplicando por 2
const double = array.map(v => v * 2);
console.log(double);


function calcular (p) {
    return p * 100;
} 

console.log(calcular(10));

let nome = marcus;
function ola (nome) {
    return `${nome} gi`;
}