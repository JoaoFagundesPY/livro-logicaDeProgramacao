function calcularTempo() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  outTempo.textContent = "";
  outTroco.textContent = "";

  var valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert("Insira o Valor corretamente");
    inValor.focus();
    return;
  }

  var tempo = 0;
  var troco = 0;

  if (valor < 1) {
    outTempo.textContent = "Valor Insuficiente";
    inValor.focus();
    return;
  } else if (valor < 1.75) {
    tempo = 30;
    troco = valor - 1.0;
  } else if (valor < 3) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 60;
    troco = valor - 3.0;
  }

  outTempo.textContent = "Tempo: " + tempo + " minutos";
  if (troco != 0) {
    outTroco.textContent = "Troco: R$ " + troco.toFixed(2);
  }
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", calcularTempo);
