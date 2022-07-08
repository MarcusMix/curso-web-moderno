class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez algum barulho!`);
  }
}

class Cat extends Animal {
    constructor(nome) {
        super(nome); // super chamando a cunstructor do animal
    }

    falar() {
        console.log(`${this.nome} miouu!! Miaauu `);
      }
}

const animal = new Animal("Leão");
const dog = new Cat("Bob");

animal.falar();
dog.falar();
