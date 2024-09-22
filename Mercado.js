function Promocao(){

    var Produto = document.getElementById("Produto").value;
    var Valor = parseFloat(document.getElementById("Valor").value);

    var Promocao = Valor / 2;

    var total = Valor * 2 + Promocao;

    document.getElementById("valorTotal").innerHTML = Produto + " - Promoção Leve 3 por R$:" + total.toFixed(2);
    document.getElementById("valorPromocao").innerHTML = "O terceiro Produto custa apenas R$:" + Promocao.toFixed(2);
}   