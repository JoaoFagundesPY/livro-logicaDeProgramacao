function calcularFuso() {
  // Cria referência aos elementos da página
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");

  // Obtem e converte o conteúdo do campo inHoraBrasil
  var horaBrasil = Number(inHoraBrasil.value);

  // Se não preencheu ou NaN (Not-a-Number)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora no Brasil Corretamente");
    inHoraBrasil.focus();
    return;
  }

  var horaFranca = horaBrasil + 5;

  // se passar das 24 horas na frança
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }

  // Exibe resposta (altera conteúdo do elemento outHoraFranca)
  outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
}

// cria uma referência ao elemento btExibir e registra evento associado a function
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
