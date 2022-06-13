function falarDepoisDe(segundos, frases) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frases)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'show de bolismo')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))