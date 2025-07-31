function calcularRaiz() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  // Verifica se preencheu ou NaN
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }
  var raiz = Math.sqrt(numero); // Calcula raiz quadrada do número

  // Se valor da variavel raiz igual a este valor arredondado para baixo...
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz; // Mostra a raiz
  } else {
    // senão, exibe mensagem indicando que não há raiz exata
    outResposta.textContent = "Não há raiz exata para " + numero;
  }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
