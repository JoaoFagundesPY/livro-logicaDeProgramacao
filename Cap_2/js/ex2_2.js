function converterDuracao() {
  // Cria Referencia aos elementos da Página
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta");

  // Obtem conteúdo dos Campos de Entrada
  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);

  // Arredonda para baixo o Valor da Divisão
  var horas = Math.floor(duracao / 60);
  // Obtem o resto da divisão entre os Números
  var minutos = duracao % 60;

  // Altera os Conteúdos dos parágrafos de Resposta
  outTitulo.textContent = titulo;
  outResposta.textContent = horas + " Hora(s) e " + minutos + " Minuto(s)";
}

// Cria uma referencia ao Elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// Registra um elemento associado ao botão, para criar uma função
btConverter.addEventListener("click", converterDuracao);
