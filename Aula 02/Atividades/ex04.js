let estoque = Number(prompt("informe a quantidade do estoque"));
let remover = Number(prompt("informe a quantidade a ser removida"));
final = estoque - remover;
alert(final>=0 ? "estoque atualizado " + final : "Operacao invalida: quantidade insuficiente no estoque");