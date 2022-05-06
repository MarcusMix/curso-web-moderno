function nomeDaFuncao() { }

const nomeDaFuncao2 = function () { }

const array = [function (a, b) { return a + b }, nomeDaFuncao, nomeDaFuncao2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function () { return "sou gostoso kk" }
console.log(obj.falar())

function run(fun) {
    fun()
}

run(function () { console.log("sou mais gostoso ainda") })

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(89)
const doisMaisTres = soma(2, 3)
doisMaisTres(89)