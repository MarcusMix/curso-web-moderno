// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas a função

const generica = "global"

function fora() {
    const generica = "local"
    function dentro() {
        return generica
    }
    return dentro
}

const umaFuncao = fora()
console.log(umaFuncao())