    const mensagemDeBoasVindas = (nome = "visitante") => {
        const hora = new Date().getHours();
        let saudacao;

    if (hora >= 6  && hora < 11) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 17) {
        saudacao = "Boa tarde";
    } else if (hora >= 18 && hora <= 23) {
        saudacao = "Boa noite";
    } else {
        saudacao = "ola";
    }
    return `${saudacao}, ${nome}! Seja bem-vindo(a)!`;
    };

    let nomeUsuario = prompt("digite seu nome:");
    alert(mensagemDeBoasVindas(nomeUsuario));


