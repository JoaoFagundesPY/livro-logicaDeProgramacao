function verificarLetra() {
  var inLetra = document.getElementById("inLetra");
  var outRespostaLetra = document.getElementById("outRespostaLetra");

  var letra = inLetra.value;

  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    outRespostaLetra.textContent = "A Letra " + letra + " é uma vogal";
  } else {
    outRespostaLetra.textContent = "A letra " + letra + " é uma consoante";
  }
}
var btVerificarLetra = document.getElementById("btVerificarLetra");
btVerificarLetra.addEventListener("click", verificarLetra);
