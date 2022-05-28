const pilotos = ['Vettel' , 'Alonso' , 'Raikkonen' ,'Massa']

pilotos.pop() //remove ultimo da lista
console.log(pilotos)

pilotos.push('Verstappen')

pilotos.shift() // remove primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca um no inicio
console.log(pilotos)


// splice pode adc ou remover elementos

//adicionar
pilotos.splice(4,0 ,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(5, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //array novo
console.log(algunsPilotos1)
// criouu array apartir do 3 elemento do outro array

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos1)

