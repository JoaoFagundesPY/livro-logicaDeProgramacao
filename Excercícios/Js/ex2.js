function calcularNota() {
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outMedia = document.getElementById("outMedia");
  var outResultado = document.getElementById("outResultado");

  inNota1.textContent = "";
  inNota2.textContent = "";

  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);
  var media = (nota1 + nota2) / 2;

  if (nota1 == 0 || isNaN(nota1) || nota2 == 0 || isNaN(nota2)) {
    outMedia.textContent = "Insira as Notas Corretamente";
    return;
  }

  if (media == 10) {
    outMedia.textContent = "Média: " + media;
    outResultado.textContent = "Aprovado com Distinção!";
  } else if (media >= 7) {
    outMedia.textContent = "Média: " + media;
    outResultado.textContent = "Aprovado";
  } else {
    outMedia.textContent = "Média: " + media;
    outResultado.textContent = "Reprovado";
  }
}
var btCalcularNotas = document.getElementById("btCalcularNotas");
btCalcularNotas.addEventListener("click", calcularNota);
