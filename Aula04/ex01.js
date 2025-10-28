function VerificarIdade(nome ="visitante", idade) {
    if (idade < 0 || idade > 120 || isNaN(idade)) {
        return `Idade inválida para ${nome}. Por favor, insira uma idade entre 0 e 120 anos.`;
    }
    if (idade < 18) {
        alert(`olá ${nome} voce é menor de idade.`);
    }
    else {
        alert(`olá ${nome} voce é maior de idade.`);
    }
}   

while (confirm("Deseja verificar a idade de alguém?")) {
    let nome = prompt("Digite o nome da pessoa:", "visitante");
    let idadeInput = prompt(`Digite a idade de ${nome}:`);
    let idade = parseInt(idadeInput, 10);
    let mensagem = VerificarIdade(nome, idade);
    alert(mensagem);
}