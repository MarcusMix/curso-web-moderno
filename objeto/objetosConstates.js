// pessoa -> 123 -> {...}
const pessoa = { nome: "João"};
pessoa.nome = 'Pedro';
console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana" }

Object.freeze(pessoa) //tornou pessoa totalmente imudável

pessoa.nome = 'Maria';
pessoa.endereco = 'Rua Jose Maria da Luz';
delete pessoa.nome; 
//nada disso vai funcionar 

console.log(pessoa.nome);
console.log(pessoa);


const pessoaConstante = Object.freeze({ nome: 'João'});
console.log(pessoaConstante);