// não aceita repeticap/ nao indexa

const times = new Set()
times.add('vasco')
times.add('flamengo')
times.add('sao paulo').add('vasco').add('figueira')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))


