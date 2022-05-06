const pessoa = {
    vozGostosa: "Bom dia floor",
    cabeloBonito: "Estilo Elvys",
    falar() {
        console.log(this.vozGostosa)
    }
}

pessoa.falar
const falar = pessoa.falar
falar() 

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()