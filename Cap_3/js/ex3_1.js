function calcularMedia() {
  // Criar uma refência aos elementos da Página
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outSituacao = document.getElementById("outSituacao");
  var outMedia = document.getElementById("outMedia");

  // Obtem os conteúdos dos campos de edição da página
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  // Calcula a Média das Notas
  var media = (nota1 + nota2) / 2;

  // Apresenta a média (Altera o conteúdo do elemento outMedia)
  outMedia.textContent = "Média das Notas: " + media.toFixed(2);

  // Cria a Condição
  if (media >= 7) {
    // Altera o Texto e estilo da cor do elento outSituação
    outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
    outSituacao.style.color = "blue";
  } else if (media >= 5) {
    outSituacao.textContent = "Atenção " + nome + ". Você está em exame";
    outSituacao.style.color = "Green";
  } else {
    outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)";
    outSituacao.style.color = "red";
  }
}
// Criar uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
// Registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularMedia);
