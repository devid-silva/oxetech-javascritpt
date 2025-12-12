const btnGerar = document.getElementById('btn-gerar');
const containerFrase = document.getElementById('container-frase');

const API_URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

async function gerarFrase() {
    //  Limpa o conteúdo anterior (remove a frase velha)
    containerFrase.innerHTML = '';
    
    // Mostra mensagem de carregamento
    const Carregando = document.createElement('p');
    Carregando.classList.add('carregando');
    Carregando.innerText = 'Cozinhando a frase...';
    containerFrase.appendChild(Carregando);

    // Desabilita botão para evitar cliques múltiplos
    btnGerar.disabled = true;
    btnGerar.style.opacity = '0.5';

    try {
        // Faz a requisição a api

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const dados = await response.json();
        
        //pega o primeiro objeto do array retornado

        const frase = dados[0];

        // Limpa o carregamento

        containerFrase.innerHTML = '';

        // manipula o DOM para mostrar a frase
        const divFrase = document.createElement('div');
        divFrase.classList.add('frase-card');
        
        divFrase.innerHTML = `
            <span class="frase-texto">"${frase.quote}"</span>
            <span class="frase-autor">- ${frase.author}</span>
        `;

        containerFrase.appendChild(divFrase);

    } catch (erro) {
        console.error(erro);
        containerFrase.innerHTML = '<p class="erro">Não foi possível carregar a frase.</p>';
    } finally {
        
      // Habilita o botão novamente
        btnGerar.disabled = false;
        btnGerar.style.opacity = '1';
    }
}

btnGerar.addEventListener('click', gerarFrase);