// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Adiciona um evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-active');
});
