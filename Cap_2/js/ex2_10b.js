function calcularPagamento() {
  var inPreco = document.getElementById("inPreco");
  var inMinutos = document.getElementById("inMinutos");
  var outValor = document.getElementById("outValor");

  var preco = Number(inPreco.value);
  var minutos = Number(inMinutos.value);

  var qntdUsos = minutos / 15;
  var operacoes = Math.ceil(qntdUsos);
  var pagamento = operacoes * preco;

  outValor.textContent = "Valor a Pagar R$: " + pagamento.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPagamento);
