/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capital, taxaJuros, tempo) {
  return capital * (taxaJuros/100) * tempo 
}
function jurosComposto(capital, taxaJuros, tempo) {
    return capital * ((taxaJuros/100) +1 ) ** tempo
}

console.log(jurosSimples(10, 5, 3))
console.log(jurosComposto(10, 5, 3))