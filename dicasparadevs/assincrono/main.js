const botao = document.querySelector("#btn");

botao.addEventListener("click", function executaNoClick() {
  console.log("clickoou!!");
  setTimeout(() => {
    btn.style.background = "green";
    fundo.style.background = "grey";
  }, 1000);
});

function pegaDados(funcao) {
    // faz um ajax
    var dados = {
        nome: 'marcus'
    }

    funcao(dados);
}

pegaDados(function executaQuandoPegaDados() {
    console.log("Dados", dados);
});