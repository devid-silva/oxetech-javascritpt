let anoAtual = prompt("Digite o ano atual:");
let anoNascimento = prompt("Digite o ano de nascimento:");

let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert(`Você completa ${idade} anos em ${anoAtual} e poderá tirar a habilitação!`);
} else {
    alert(`Você completa ${idade} anos em ${anoAtual} e não poderá tirar a habilitação!`);
}
