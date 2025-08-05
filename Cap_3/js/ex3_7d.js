function verificarLados() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outResposta = document.getElementById("outResposta");
  var outTipo = document.getElementById("outTipo");

  outResposta.textContent = "";
  outTipo.textContent = "";

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoB + ladoA) {
    if (ladoA == ladoB && ladoB == ladoC) {
      outResposta.textContent = "Os lados podem formar um Triângulo";
      outTipo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
      outResposta.textContent = "Os lados podem formar um Triângulo";
      outTipo.textContent = "Tipo: Isósceles";
    } else {
      outResposta.textContent = "Os lados podem formar um Triângulo";
      outTipo.textContent = "Tipo: Escaleno";
    }
  } else {
    outResposta.textContent = "Os lados não podem formar um Triângulo";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarLados);
