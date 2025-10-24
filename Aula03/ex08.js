const senhaCorreta = "1234";
let senhaDigitada;

do {
    senhaDigitada = prompt("digite a senha:");

    if (senhaDigitada !== "1234") {
        alert("senha incorreta. tente novamente.");
    }

} while (senhaDigitada !== "1234");

alert("acesso liberado.");