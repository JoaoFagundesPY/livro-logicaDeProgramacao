function detectarTurno() {
  var inTurno = document.getElementById("inTurno");
  var outRespostaTurno = document.getElementById("outRespostaTurno");

  var turno = inTurno.value.toUpperCase();

  if (turno == "M") {
    outRespostaTurno.textContent = "Bom Dia!";
  } else if (turno == "N") {
    outRespostaTurno.textContent = "Boa Noite!";
  } else if (turno == "V") {
    outRespostaTurno.textContent = "Boa Tarde!";
  } else {
    outRespostaTurno.textContent = "Digite um turno Válido...";
  }
}
var btVerificarTurno = document.getElementById("btVerificarTurno");
btVerificarTurno.addEventListener("click", detectarTurno);

function limparTurno() {
  document.getElementById("inTurno").value = "";
  document.getElementById("outRespostaTurno").value = "";
}
var btLimparTurno = document.getElementById("btLimparTurno");
btLimparTurno.addEventListener("click", limparTurno);
