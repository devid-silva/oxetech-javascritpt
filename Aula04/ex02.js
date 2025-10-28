    function calcular (num1 = 0, num2 = 0, operacao = '+') {
        num1 = Number(num1);
        num2 = Number(num2);   
        if (isNaN(num1) || isNaN(num2)) {
            return 'Entrada inválida. Por favor, insira números válidos.';
        }
        if ((operacao == "/" || operacao == "%") && num2 === 0) {
            return 'Erro: Divisão por zero ou modulo por zero não é permitida.';
        }
        switch (operacao) { 
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            case '%':
                return num1 % num2;
            default:
                return 'Operação inválida. Por favor, escolha uma operação válida.';
        } 
    }
     while (confirm("Deseja realizar um cálculo?")) {
            let num1 = prompt("Digite o primeiro número:", "0");
            let num2 = prompt("Digite o segundo número:", "0");
            let operacao = prompt("Digite a operação (+, -, *, /, %):", "+");
            let resultado = calcular(num1, num2, operacao);
            alert(`O resultado é: ${resultado}`);
        }
        alert('Obrigado por usar a calculadora!');