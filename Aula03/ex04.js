let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let operacoes = Number(prompt("Escolha a operação que deseja realizar:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));

switch (operacoes){
case 1:
    let soma = numero1 + numero2;
    alert(`resultado da soma :${soma}`);
    break;
case 2:
    let subtracao = numero1 - numero2;
    alert(`resultado da subtração :${subtracao}`);
    break;
case 3:
    let multiplicacao = numero1 * numero2;
    alert(`resultado da multiplicação :${multiplicacao}`);
    break;
case 4:
    let divisao = numero1 / numero2;
    alert(`resultado da divisão :${divisao}`);
    break;      }