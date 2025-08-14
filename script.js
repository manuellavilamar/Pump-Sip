// Alterna tema
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Modal Equipe
const fotoEquipe = document.getElementById('fotoEquipe');
const modalEquipe = document.getElementById('modalEquipe');
const closeEquipeModalBtn = document.getElementById('closeEquipeModal');

fotoEquipe.addEventListener('click', () => {
  modalEquipe.classList.add('active');
});

closeEquipeModalBtn.addEventListener('click', () => {
  modalEquipe.classList.remove('active');
});

modalEquipe.addEventListener('click', e => {
  if (e.target === modalEquipe) {
    modalEquipe.classList.remove('active');
  }
});

// Modal Depoimento
const depoimentoCards = document.querySelectorAll('.depoimento-card');
const modalDepoimento = document.getElementById('modalDepoimento');
const modalDepoimentoContent = document.getElementById('modalDepoimentoContent');
const closeDepoimentoModalBtn = document.getElementById('closeDepoimentoModal');

function openModalDepoimento(card) {
  // Copia o conteúdo do card para o modal
  const texto = card.querySelector('.depoimento-texto').textContent;
  const nome = card.querySelector('.depoimento-nome').textContent;
  const fotoSrc = card.querySelector('.depoimento-foto').src;
  const fotoAlt = card.querySelector('.depoimento-foto').alt;

  modalDepoimentoContent.innerHTML = `
    <button class="modal-close-btn" id="closeDepoimentoModal">&times;</button>
    <img src="${fotoSrc}" alt="${fotoAlt}" style="width: 140px; height: 140px; border-radius: 50%; border: 3px solid #66ccff; object-fit: cover; margin-bottom: 20px;">
    <h3 style="color:#66ccff; margin-bottom: 15px;">${nome}</h3>
    <p style="color:#aad4ffcc; font-style: italic; font-size: 18px; max-width: 600px; margin: 0 auto;">${texto}</p>
  `;

  // Reatribui o listener de fechar porque o botão foi recriado
  const closeBtn = document.getElementById('closeDepoimentoModal');
  closeBtn.addEventListener('click', () => {
    modalDepoimento.classList.remove('active');
  });

  modalDepoimento.classList.add('active');
}

// Abre modal quando clica no depoimento
depoimentoCards.forEach(card => {
  card.addEventListener('click', () => openModalDepoimento(card));
  card.addEventListener('keypress', e => {
    if(e.key === 'Enter' || e.key === ' ') openModalDepoimento(card);
  });
});

// Fecha modal ao clicar fora da área do conteúdo
modalDepoimento.addEventListener('click', e => {
  if (e.target === modalDepoimento) {
    modalDepoimento.classList.remove('active');
  }
});
