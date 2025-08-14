function ordemDescrescente() {
  // Cria relação aos elementos Html
  var inNumeroU = document.getElementById("inNumeroU");
  var inNumeroD = document.getElementById("inNumeroD");
  var inNumeroT = document.getElementById("inNumeroT");
  var outResposta = document.getElementById("outResposta");
  var outError = document.getElementById("outError");

  var numeroUm = Number(inNumeroU.value);
  var numeroDois = Number(inNumeroD.value);
  var numeroTres = Number(inNumeroT.value);

  // Verifica se os Campos foram preenchidos Corretamente
  if (
    numeroUm == 0 ||
    isNaN(numeroUm) ||
    numeroDois == 0 ||
    isNaN(numeroDois) ||
    numeroTres == 0 ||
    isNaN(numeroTres)
  ) {
    outError.textContent = "Preencha os Campos Corretamente";
    inNumeroU.focus();
    return;
  }

  var maior = "";
  var medio = "";
  var menor = "";

  // Verifica o Maior
  if (numeroUm > numeroDois && numeroUm > numeroTres) {
    maior = numeroUm;
  } else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    maior = numeroDois;
  } else {
    maior = numeroTres;
  }

  // Verificar o Menor
  if (numeroUm < numeroDois && numeroUm < numeroTres) {
    menor = numeroUm;
  } else if (numeroDois < numeroUm && numeroDois < numeroTres) {
    menor = numeroDois;
  } else {
    menor = numeroTres;
  }

  // Verifica o Intermédio
  if (
    (numeroUm > numeroDois && numeroUm < numeroTres) ||
    (numeroUm < numeroDois && numeroUm > numeroTres)
  ) {
    medio = numeroUm;
  } else if (
    (numeroDois > numeroUm && numeroDois < numeroTres) ||
    (numeroDois < numeroUm && numeroDois > numeroTres)
  ) {
    medio = numeroDois;
  } else {
    medio = numeroTres;
  }

  outResposta.textContent = maior + ", " + medio + ", " + menor;
}
var btMostrarOrdem = document.getElementById("btMostrarOrdem");
btMostrarOrdem.addEventListener("click", ordemDescrescente);

function limparOrdem() {
  document.getElementById("inNumeroU").value = "";
  document.getElementById("inNumeroD").value = "";
  document.getElementById("inNumeroT").value = "";
  document.getElementById("outResposta").textContent = "";
  document.getElementById("outError").textContent = "";

  inNumeroU.focus();
  return;
}
var btLimparOrdem = document.getElementById("btLimparOrdem");
btLimparOrdem.addEventListener("click", limparOrdem);
