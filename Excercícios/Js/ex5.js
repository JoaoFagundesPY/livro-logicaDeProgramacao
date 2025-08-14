function mostrarMaioreMenor() {
  // Criar relação dos objetos
  var inNumeroUm = document.getElementById("inNumeroUm");
  var inNumeroDois = document.getElementById("inNumeroDois");
  var inNumeroTres = document.getElementById("inNumeroTres");
  var outMaior = document.getElementById("outMaior");
  var outMenor = document.getElementById("outMenor");
  var outErro = document.getElementById("outErro");

  // Transforma a entrada de dados em Número Inteiro
  var numeroUm = Number(inNumeroUm.value);
  var numeroDois = Number(inNumeroDois.value);
  var numeroTres = Number(inNumeroTres.value);

  // Verifica se os Campos foram preenchidos corretamente
  if (
    numeroUm == 0 ||
    isNaN(numeroUm) ||
    numeroDois == 0 ||
    isNaN(numeroDois) ||
    numeroTres == 0 ||
    isNaN(numeroTres)
  ) {
    outErro.textContent = "Insira os Números Corretamente";
    inNumeroUm.focus();
    return;
  }

  // Variaveis de maior e menor
  var maior = "";
  var menor = "";

  // Verifica o Maior
  if (numeroUm > numeroDois && numeroUm > numeroTres) {
    maior = numeroUm;
  } else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    maior = numeroDois;
  } else if (numeroTres > numeroUm && numeroTres > numeroDois) {
    maior = numeroTres;
  }

  // Verifica o Menor
  if (numeroUm < numeroDois && numeroUm < numeroTres) {
    menor = numeroUm;
  } else if (numeroDois < numeroUm && numeroDois < numeroTres) {
    menor = numeroDois;
  } else if (numeroTres < numeroUm && numeroTres < numeroDois) {
    menor = numeroTres;
  }

  outMaior.textContent = "Maior Número: " + maior;
  outMenor.textContent = "Menor Número: " + menor;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarMaioreMenor);

function limparCampos() {
  document.getElementById("inNumeroUm").value = "";
  document.getElementById("inNumeroDois").value = "";
  document.getElementById("inNumeroTres").value = "";
  document.getElementById("outMaior").textContent = "";
  document.getElementById("outMenor").textContent = "";
  document.getElementById("outErro").textContent = "";
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
