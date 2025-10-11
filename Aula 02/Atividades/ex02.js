let valor = Number(prompt("Informe o valor da compra: "));
let desconto = valor>= 100 ? (valor*0.10) : (valor*0.05);
let resultado = valor-desconto;
alert("valor original: " + valor + "\ndesconto aplicado: " + desconto + "\nvalor final: " + resultado);