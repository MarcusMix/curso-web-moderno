/* setTimeout(function() {
    console.log('executando...')

    setTimeout(function() {
        console.log('executando 2x...')

        setTimeout(function() {
            console.log('executando 3x...')

        },2000)
    },2000)
},2000) */ //2 segundos

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('executando promisse...')
            resolve()
        },tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor) 