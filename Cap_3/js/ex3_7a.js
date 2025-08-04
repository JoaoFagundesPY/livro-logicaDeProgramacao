function parOuImpar() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Insira o número corretamente!");
    inNumero.focus();
    return;
  }

  if (numero % 2 == 0) {
    outResposta.textContent = numero + " é Par.";
  } else {
    outResposta.textContent = numero + " é ímpar.";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", parOuImpar);
