function Calcular(){
    var valorUso = document.getElementById("valorUso").value;
    var tempoUso = document.getElementById("tempoUso").value;

   var Calcular;

   Calcular = (valorUso * tempoUso) / 15;

   document.getElementById("resultado").innerHTML = "Você ficou " +tempoUso+ "minutos na Lan House, então o valor a ser pago é " +Calcular;

}