function mostrarDesconto() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outProduto = document.getElementById("outProduto");
  var outPromocao = document.getElementById("outPromocao");

  var inProduto = inProduto.value;
  var inPreco = Number(inPreco.value);

  var valorDesconto = inPreco / 2;
  var precoTotal = inPreco * 3;
  var precoPromo = precoTotal - valorDesconto;

  outProduto.textContent =
    inProduto + " - Promoção: Leve 3 por R$: " + precoPromo.toFixed(2);
  outPromocao.textContent =
    "O 3° Produto custa apenas R$: " + valorDesconto.toFixed(2);
}

var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarDesconto);
