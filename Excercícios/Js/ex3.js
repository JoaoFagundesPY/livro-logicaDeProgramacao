function verificarMaiorNumero() {
  // Cria referencia dos elementos
  var inNumero1 = document.getElementById("inNumero1");
  var inNumero2 = document.getElementById("inNumero2");
  var inNumero3 = document.getElementById("inNumero3");
  var outMaiorNumero = document.getElementById("outMaiorNumero");

  // Pega o valor das variaveis
  var numero1 = Number(inNumero1.value);
  var numero2 = Number(inNumero2.value);
  var numero3 = Number(inNumero3.value);
  var maiorNumero = 0;

  // Limpa os campos de preenchimento
  inNumero1.textContent = "";
  inNumero2.textContent = "";
  inNumero3.textContent = "";

  // Verifica se é Número ou não está vazio
  if (
    isNaN(numero1) ||
    isNaN(numero2) ||
    isNaN(numero3) ||
    numero1 == 0 ||
    numero2 == 0 ||
    numero3 == 0
  ) {
    outMaiorNumero.textContent = "Insira os Números Corretamente";
    return;
  }

  // Verifica o maior número
  if (numero1 > numero2 && numero1 > numero3) {
    maiorNumero = numero1;
  } else if (numero2 > numero1 && numero2 > numero3) {
    maiorNumero = numero2;
  } else {
    maiorNumero = numero3;
  }

  // Resposta final
  outMaiorNumero.textContent = "Maior Número: " + maiorNumero;
}
var btMaiorNumero = document.getElementById("btMaiorNumero");
btMaiorNumero.addEventListener("click", verificarMaiorNumero);
