function trocarValores() {
  // Cria referencia entre os elementos
  var inPrimeiroNumero = document.getElementById("inPrimeiroNumero");
  var inSegundoNumero = document.getElementById("inSegundoNumero");

  var primeiroNumero = Number(inPrimeiroNumero.value);
  var segundoNumero = Number(inSegundoNumero.value);

  var novoPrimeiro = segundoNumero;
  var novoSegundo = primeiroNumero;

  alert(
    "Antes: Primeiro Número: " +
      primeiroNumero +
      " e Segundo Número: " +
      segundoNumero +
      ". E Depois: Primeiro Número: " +
      novoPrimeiro +
      " e Segundo Número: " +
      novoSegundo +
      "."
  );
}
var btTrocarValor = document.getElementById("btTrocarValor");
btTrocarValor.addEventListener("click", trocarValores);
