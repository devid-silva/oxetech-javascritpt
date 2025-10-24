let numero = Number(prompt("Digite o numero: "));
let resultado = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % 2 == 0) {
            resultado = resultado + i;
        }
    }

alert(`A soma dos números pares de 1 até ${numero} é: ${resultado}`);