function verificarVelocidade() {
  var inCondutor = document.getElementById("inCondutor");
  var inPermitida = document.getElementById("inPermitida");
  var outResposta = document.getElementById("outResposta");

  var permitida = Number(inPermitida.value);
  var condutor = Number(inCondutor.value);

  if (permitida == 0 || isNaN(permitida)) {
    alert("Preencha a Velocidade Permitida Corretamente");
    inPermitida.focus();
    return;
  }

  if (condutor == 0 || isNaN(condutor)) {
    alert("Preencha a Velocidade do Condutor Corretamente");
    inCondutor.focus();
    return;
  }

  // Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”.
  if (condutor <= permitida) {
    outResposta.textContent = "Situação: Sem Multa";
  } else if (condutor <= permitida * 1.2) {
    outResposta.textContent = "Situação: Multa Leve";
  } else {
    outResposta.textContent = "Situação: Multa Pesada";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);
