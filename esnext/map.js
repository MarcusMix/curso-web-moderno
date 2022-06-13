const tec = new Map()
tec.set('reac', { framework: false})
tec.set('angular', { framework: true})

console.log(tec.react)
console.log(tec.get('react').framework)