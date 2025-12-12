const dados = 'meusHabitos';

//alterna classes CSS para mostrar ou esconder as divs. 
function alternarAba(nomeAba) {
    const botoes = document.querySelectorAll('.tab-btn'); // Seleciono todos os botões
    botoes.forEach(btn => btn.classList.remove('active')); // Percorre todos os botões com forEach
    
    if(nomeAba === 'andamento') botoes[0].classList.add('active');  //(0 = Andamento, 1 = Concluído)
    else botoes[1].classList.add('active');  

    const divAndamento = document.getElementById('habitList');

    const divConcluido = document.getElementById('completedList');

    // Alterna qual lista fica visível

    if(nomeAba === 'andamento') {
        divAndamento.classList.add('mostrar-lista');
        divConcluido.classList.remove('mostrar-lista');
    } else {
        divAndamento.classList.remove('mostrar-lista');
        divConcluido.classList.add('mostrar-lista');
    }
}

// l~e os dados salvos no localStorage e devolve a lista de hábitos.

function carregarHab() { 
    try { 
        return JSON.parse(localStorage.getItem(dados)) || []; 
    } catch(e) { 
        return []; 
    } 
}

// Salva a lista de hábitos no localStorage com setItem.
function salvarHab(lista) { 
    localStorage.setItem(dados, JSON.stringify(lista)); 
}

let listaHabitos = carregarHab(); // verifica se há dados salvos
let somaSequencias = 0;  
let contagemConcluidos = 0; 

const frases = [
  "A constância supera a motivação.",
  "Pequenos passos diariamente criam grandes resultados.",
  "Não precisa ser perfeito, só precisa continuar.",
  "Hábito é escolha multiplicada por repetição.",
  "O progresso aparece com disciplina, não com impulso.",
  "Cada dia é uma nova chance para melhorar.",
  "Transforme ações em hábitos, e hábitos em conquistas.",
  "A jornada de mil milhas começa com um único passo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Persistência é o caminho para a maestria."
];

document.getElementById('quoteBox').innerText = frases[Math.floor(Math.random() * frases.length)];

// Elementos da Tela 

const totalHabitos = document.getElementById('totalHabits');
const totalSequencias = document.getElementById('totalConclusions'); 
const habitosCompletos = document.getElementById('habitsCompleted');
const divLista = document.getElementById('habitList');
const divConcluidos = document.getElementById('completedList');
const msgBoasVindas = document.getElementById('welcome');

// Carregar nome do usuário
function carregarUsuario() {
  const chaveUser = 'nome_usuario_v1';
  let nome = localStorage.getItem(chaveUser);
  if(!nome) {
    nome = prompt('Qual seu nome?');
    if(!nome || !nome.trim()) nome = 'Visitante';
    localStorage.setItem(chaveUser, nome);
  }
  msgBoasVindas.textContent = `Olá, ${nome}!`;
}
//
function atualizarTotais() {
  somaSequencias = 0;
  contagemConcluidos = 0;
  
  listaHabitos.forEach(h => {
    somaSequencias += (h.totalAcumulado || 0);
    
    if ((h.sequencia || 0) >= (h.meta || 0) && h.meta > 0) {
        contagemConcluidos++;
    }
  });

  // Atualiza a tela usando as variáveis HTML
  totalHabitos.textContent = listaHabitos.length;
  totalSequencias.textContent = somaSequencias; 
  habitosCompletos.textContent = contagemConcluidos;
}


// função render para limpar a teala 
function render() {
  divLista.innerHTML = '';
  divConcluidos.innerHTML = '';

  const pendentes = listaHabitos.filter(h => (h.sequencia || 0) < h.meta);
  const finalizados = listaHabitos.filter(h => (h.sequencia || 0) >= h.meta);

  if(pendentes.length === 0) divLista.innerHTML = '<div class="empty-state">Tudo limpo! Nenhuma tarefa pendente.</div>';
  if(finalizados.length === 0) divConcluidos.innerHTML = '<div class="empty-state">Nenhum hábito concluído ainda.</div>';

  listaHabitos.forEach(h => {
    const div = document.createElement('div'); // cria uma div na memória
    div.className = 'habit';
    
    const metaBatida = (h.sequencia  >= h.meta); // compara a sequência com a meta

    div.innerHTML = `
      <div class="info">
        <b>${(h.nome)}</b>
        <small>Progresso: ${h.sequencia} / ${h.meta}</small>
        ${metaBatida ? '<small style="color:green; font-weight:bold;">Meta batida!</small>' : ''}
      </div>
      <div class="actions">
        ${ metaBatida 
            ? `<span class="badge-done">🎉 Concluído</span> <button class="btn-reset" title="Reiniciar" onclick="reiniciarHab(${h.id})">↺</button>` 
            : `<button class="btn-complete" onclick="marcarFeito(${h.id})">✅ +1</button>` 
        }
        <button class="btn-edit" onclick="editarHab(${h.id})">✏️</button>
        <button class="btn-delete" onclick="excluirHab(${h.id})">🗑️</button>
      </div>
    `;

    // Se metaBatida === true → entra na lista de concluidos se não na lista em andamento
    if(metaBatida) divConcluidos.appendChild(div); 
    else divLista.appendChild(div);
  });
}

// e ventos dos botões
  window.marcarFeito = function(id) {
    const h = listaHabitos.find(item => item.id === id); // retorna o objeto inteiro .
    if(!h) return;

    if((h.sequencia || 0) < h.meta) {
      h.sequencia = (h.sequencia || 0) + 1;
      h.totalAcumulado = (h.totalAcumulado || 0) + 1;
      
      if(h.sequencia === h.meta) {
          try { confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); } catch(e){}
      }
      salvarEAtualizar();
    }
  };

//window.reiniciarHab = function(id) {
  //  const h = listaHabitos.find(item => item.id === id);
    //if(h) { 
      //  h.sequencia = 0; 
        //salvarEAtualizar(); 
   // }
//};

window.excluirHab = function(id) {
  if(confirm('Tem certeza que deseja excluir?')) {
      listaHabitos = listaHabitos.filter(item => item.id !== id);
      salvarEAtualizar();
  }
};

window.editarHab = function(id) {
    const h = listaHabitos.find(item => item.id === id);
    if(!h) return;
    
    const novoNome = prompt('Novo nome:', h.nome);
    const novaMeta = prompt('Nova meta:', h.meta);
    
    
    if(novoNome) h.nome = novoNome;   //  Se for true e   
    if(novaMeta) h.meta = Number(novaMeta);
    
    salvarEAtualizar();
};

document.getElementById('btnAdd').addEventListener('click', () => {
  const nomeInput = document.getElementById('inputName').value.trim();
  const metaInput = document.getElementById('inputMeta').value.trim();

  if(!nomeInput) { alert('Digite o nome do hábito.'); return; }
  

  //verifica se a meta é um número válido
  const meta = Number(metaInput);
  if(isNaN(meta) || meta < 1) { alert('Meta inválida.'); return; }

  listaHabitos.push({ 
      id: Date.now(), 
      nome: nomeInput, 
      meta: meta, 
      sequencia: 0, 
      totalAcumulado: 0 
  });
  
  document.getElementById('inputName').value = '';
  document.getElementById('inputMeta').value = '';
  salvarEAtualizar();
});

function salvarEAtualizar() {
    salvarHab(listaHabitos);
    atualizarTotais();
    render();
}

carregarUsuario();
atualizarTotais();
  render();