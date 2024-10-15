let serviceUrl = ""; // Variável para armazenar o URL do WhatsApp

function confirmRedirect(service) {
  const phoneNumber = "+5584988823015";
  const message = `Olá, gostaria de mais informações sobre ${service}`;
  serviceUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Exibe o pop-up de confirmação
  document.getElementById('popup-text').textContent = `Você será direcionado ao WhatsApp para saber mais sobre ${service}. Deseja continuar?`;
  document.getElementById('popup').style.display = 'flex';
}

// Ações dos botões do pop-up
document.getElementById('confirm-btn').addEventListener('click', () => {
  window.open(serviceUrl, '_blank'); // Abre o WhatsApp em uma nova aba
  document.getElementById('popup').style.display = 'none'; // Fecha o pop-up
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none'; // Fecha o pop-up
});
