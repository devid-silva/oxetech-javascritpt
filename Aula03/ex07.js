    let positivos = 0;
    let negativos = 0;

    while (true) {
        let numero = Number(prompt("Digite um número inteiro ou 0 para sair:"));

        if (numero === 0) {
            break;
        }

        if (numero > 0) {
            positivos++;
        } else {
            negativos++;
        }
    }   
    alert(`quantidade de numeros positivos : ${positivos}\nquantidade de numeros negativos: ${negativos}`);