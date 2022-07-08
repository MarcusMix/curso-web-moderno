const { conforms } = require("lodash");

class Pessoa {
  constructor(primeiroNome, sobrenome, idade) {
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  getNomeTodo() {
    console.log(`${this.primeiroNome} ${this.sobrenome}`);
  }

  static falar() {
    console.log("Hello World!");
  }
}

const pessoa = new Pessoa("Marcus", "Sandi", 20);

console.log(pessoa);
pessoa.getNomeTodo();

// aciona sem o static
// pessoa.falar();

//aciona com  o static
Pessoa.falar();
