function promoção(){
    var medicamento = document.getElementById("remedio").value;
    var preço = parseFloat(document.getElementById("Preço").value);

    var preçoPromoção;
    if(Number.isInteger(preço))
    {
        preçoPromoção = preço * 2;
    }
    else
    {
        preçoPromoção = Math.floor(preço) * 2;
    }

    document.getElementById("Promoção").innerHTML = "Promoção do" +medicamento+ ", leve 2 por apenas R$" +preçoPromoção+ ",00";

}