/*
a) Uma farmácia está com uma promoção – Na compra de duas unidades de um
 mesmo medicamento, o cliente recebe como desconto os centavos do
 valor total. Elaborar um programa que leia descrição e preço de um
 medicamento. Informe o valor do produto na promoção. A Figura 2.11
 apresenta a tela com um exemplo de dados de entrada e saída do
 programa.
*/

function mostrarPromocao() {
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outMedicamento = document.getElementById("outMedicamento");
  var outValorPromo = document.getElementById("outValorPromo");

  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  var valor = preco * 2;
  var promocao = Math.trunc(valor);

  outMedicamento.textContent = "Medicamento " + medicamento;
  outValorPromo.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btMostrarPromo = document.getElementById("btMostrarPromo");
btMostrarPromo.addEventListener("click", mostrarPromocao);
