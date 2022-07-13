// // //FOR IN

//const { result } = require("lodash");

// // const obj = {
// //     car: "",
// // }
// // const obj_name = {
// //     car
// // }

// // function dump_props(obj, obj_name) {
// //     var result = "";
// //     for (var i in obj) {
// //       result += obj_name + "." + i + " = " + obj[i] + "<br>";
// // //     }
// // //     result += "<hr>";
// // //     return result;
// // //   }

// // // function calcularMult (a) {
// // //     let b = "14";
// // //     return a * b;
// // // }

// // // console.log(calcularMult(2));

// // function minhaFuncao(objeto) {
// //     objeto.make = "Toyota";
// //   }
  
// //   var meucarro = {make: "Honda", model: "Accord", year: 1998};
// //   var x, y, z;
  
// //   x = meucarro.make;     // x recebe o valor "Honda"
  
// //   minhaFuncao(meucarro);
// //   y = meucarro.make; // y recebe o valor "Toyota"//
// //                     // (a propriedade make foi alterada pelafunção)

// //   z = meucarro.year;  // as outras propriedades não mudam
  

// // console.log(x);
// // console.log(y);
// // console.log(z);


// // //FUNÇÃO NORMAL
// // var square = function(numero) {return numero * numero};
// // // ARROW FUNCTION
// // var square = (numero) => numero * numero;


// // var res = square(4) //x recebe o valor 16
// // console.log(res);

// // As seguintes variáveis são definidas no escopo global
// var num1 = 20,
//     num2 = 3,
//     nome = "Markitos";

// // Esta função é definida no escopo global
// function multiplica() {
//   return num1 * num2;
// }

// multiplica(); // Retorna 60

// // Um exemplo de função aninhada
// function getScore () {
//   var num1 = 2,
//       num2 = 3;

//   function add() {
//     return nome + " pontuação " + (num1 + num2) + ".";
//   }

//   return add();
// }

// console.log(getScore()); // Retorna "Markitos pontuação 5."



//  FUNÇÃO DENTRO DE OUTRA FUNÇÃO
// FUNÇÃO ANINHADA
// function addSquares(a,b) {
//     function square(x) {
//        return x * x;
//     }
//     return square(a) + square(b);
//  }
//  a = addSquares(2,3); // retorna 13
// //  2x2 = 4
// //  3x3 = 9
// //  13
//  b = addSquares(3,4); // retorna 25
// //  3x3 = 9
// //  4x4 = 16
// //  25
//  c = addSquares(4,5); // retorna 41
// //  4x4 = 16
// //  5x5 = 25
// //  41

// function fora() {
//     var x = 100;
//     function dentro(x) {
//        return x;
//     }
//     return dentro;
//  }
// //  result = fora()(1);
//  console.log(fora(111)(1));

// var pet = function(nome) {          // A função externa define uma variável "nome"
//     var getNome = function() {
//       return nome;                // A função interna tem acesso à variável "nome"  da função externa
//     }

//     return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
//   },
//   myPet = pet("Vivie");

// myPet();                            // Retorna "Vivie"


// console.log(myPet());



// var getCode = (function(){
//     var secureCode = "0]Eal(eh&2";    // Um código que não queremos que pessoas de fora sejam capazes de modificar
//     console.log(secureCode + " dentro da função");  
    
//     return function code() {
//         return secureCode;
//     };
// })();

// getCode();    // Retorna o secureCode


// console.log(getCode() + " fora da função");  
// console.log(secureCode);  // neste escopo não existe

// function myConcat(separador) {
//     var result = "",
//     i;
//     for (i = 1; i < arguments.length; i++) {
//        result += arguments[i] + separador;
//     }
//     return result;
//  }
//  let concatenador = myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "parsley", "repetidor", "repetidor", "repetidor", "repetidor", "repetidor", "repetidor", "repetidor", "repetidor", "repetidor");
//  console.log(concatenador);



//  //ESTA FORMA NÃO É MAIS NECESSÁRIA!!
//  function multiplicar(a, b) {
//     b = typeof b !== 'undefined' ?  b : 1;
  
//     return a*b;
//   }
  
//   multiplicar(5); // 5
//   console.log(multiplicar(5));

// //FORMA MAIS SIMPLES, ATRIBUIR VALORES PADRÃO NOS PARÂMETROS
//   function multiplicar(a = 1, b = 1) {
//     return a*b;
//   }
  
//   console.log(multiplicar(5,5) );

// function multiplicar(multiplicador, ...args) {
//     return args.map(x => multiplicador * x);
//   }
  
//   var arr = multiplicar(5, 10, 5, 2);
//   console.log(arr); // [18, 4, 6]

// var a = [
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryl­lium"
//   ];
  
//   var a2 = a.map(function(s){ return s.length });
  
//   var a3 = a.map( s => s.length );
//   console.log(a2);
//   console.log(a3);

// function Pessoa() {
//     var self = this; // Alguns preferem 'that' em vez de 'self'. 
//                      // Escolha um e seja consistente.
//     self.idade = 0;
  
//     setInterval(function crescer() {
//       // A chamada de retorno refere-se à variável 'self' na qual
//       // o valor é o objeto esperado.
//       self.idade++;
//       console.log(self.idade);
//     }, 1000);
// }
// var p = new Pessoa();
// console.log(Pessoa(19));


// function Pessoa(){
//     this.idade = 0;
    
//     setInterval(() => {
//         this.idade++; // propriedade |this|refere ao objeto pessoa
//     }, 1000);
// }

// var p = new Pessoa();
// console.log(Pessoa(19));

let nome = 19.998000;
console.log(Number.isNaN(10));
console.log(parseFloat(nome));
console.log(parseInt(nome));