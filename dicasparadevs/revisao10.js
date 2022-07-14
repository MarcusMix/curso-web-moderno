
ESTUDOS OBJETOS
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Ka";
meuCarro.ano = 2007;


function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
}

console.log(mostrarProps(meuCarro, "carro"));

// CRIANDO UM CONSTRUTOR
function Carro(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
  }

NOVO OBJETO, COM O OPERADOR NEW
  var meucarro = new Carro("Volkswagem", "Jetta TSi", 2020);

  console.log(meucarro);
  console.log(meucarro.marca);
  console.log(meucarro.modelo);
  console.log(meucarro.ano);

function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  
  var jose = new Pessoa("Jose Silva", 33, "M");
  var paulo = new Pessoa("Paulo Santos", 39, "M");
  
  var carro1 = new Carro("Volkswagem", "Jetta TSi", 2020, jose);
  var carro2 = new Carro("Nissan", "Cherry qq", 2020, paulo);
  console.log(carro1.dono);
  console.log(carro2.dono);
  
  carro1.cor = "preto"; // adc novas propriedades
  console.log(carro1);
