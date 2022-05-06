let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let nomeQualquer = function () {
    return "chupa cabra"
}

nomeQualquer = () => "chupa cabra adestrado"
nomeQualquer =_ => "pau de rato" //possui parametro
console.log(nomeQualquer())
