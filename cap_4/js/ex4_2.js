function listarNumeros() {
  // cria referencia aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // Obtém o número informado
  var numero = Number(inNumero.value);

  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  // inicializa variável resposta
  var resposta = "Entre " + numero + " e 1: ";

  // cria um for decrescente
  for (var i = numero; i > 0; i--) {
    // resposta vai acumulando números e vírgulas
    resposta = resposta + i + ", ";
  }

  // altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}
var btDescrescer = document.getElementById("btDecrescer");
btDescrescer.addEventListener("click", listarNumeros);
