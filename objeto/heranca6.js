function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',  123)

const aula2 = new Aula('Ate breve', 642)

console.log(aula1, aula2)