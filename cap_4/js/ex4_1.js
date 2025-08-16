function mostrarTabuada() {
  // cria referencia aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outTabuada = document.getElementById("outTabuada");

  // converte conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  // valida o numero
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  // cria variável do tipo string que irá concatenar a resposta
  var resposta = "";

  // cria um laço de repetição
  for (var i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteudos
    resposta = resposta + numero + " x " + numero * i + "\n";
  }
  // o conteudo da tag pre é alterado para exibir a tabuada do num
  outTabuada.textContent = resposta;
}

// cria referencia ao botão e após associa function ao evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);
