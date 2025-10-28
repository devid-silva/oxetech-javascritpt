const calcularDesconto = ( preco = 0, porcentagemDesconto = 0 ) => {
    preco = Number(preco);
    porcentagemDesconto = Number(porcentagemDesconto);


    if ( isNaN(preco) || preco <= 0 ) {
        return "preço invalido. Por favor, insira um preço válido maior quea zero.";
    }
    if (isNaN(porcentagemDesconto) || porcentagemDesconto < 0 || porcentagemDesconto > 100) {
        return "Desconto inválido. Por favor, insira um valor de desconto entre 0 e 100.";
    }


    const valorFinal =  preco - (preco * (porcentagemDesconto / 100));
    return `Preço original: R$ ${preco.toFixed(2)}\nDesconto: ${porcentagemDesconto}%\nPreço final: R$ ${valorFinal.toFixed(2)}`;
};

    while (confirm("Deseja calcular um desconto?")) {
        const preco = prompt("Digite o preço do produto:");
        const desconto = prompt("Digite o percentual de desconto:");

        const resultado = calcularDesconto(preco, desconto);
        alert(resultado);
            }

    alert(" Programa encerrado. Obrigado por usar o calculador de descontos!");