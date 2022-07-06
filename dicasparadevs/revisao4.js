let pessoa = {
    nome: "Marcus",
    sobrenome: "Sandi",
    idade: 20,
    hobbies: ["Jogar video game", "Assistir séries", "Ler"],
    dog: {
        nome: "Rex",
        idade: 4
    },
}

let {nome, sobrenome, idade, hobbies} = pessoa;

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let hobbies = pessoa.hobbies;
 let ler = pessoa.hobbies[2];

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(hobbies);
console.log(ler);
console.log(pessoa.dog);
console.log(pessoa.dog.idade);

let toDoList = [
    {
        id:1,
        descricao: "Estudar programação",
        realizada: false,
    },
    {
        id:2,
        descricao: "Ler livros",
        realizada: true,
    },
    {
        id:3,
        descricao: "Musculação",
        realizada: true,
    },
];

const descricaoUltimoToDoList = toDoList[2].descricao;
console.log(descricaoUltimoToDoList);
