    let nome = prompt("nome: ");
    let peso = Number(prompt("peso: "));
    let altura = Number(prompt("altura: "));
    let imc = (peso / (altura * altura));
    resultado = confirm("seus dados estão corretos ?");
    alert( resultado ? nome +" seu imc é " + imc : "saindo do programa");

