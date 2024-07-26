document.addEventListener('DOMContentLoaded', (event) => {
  let carrosselItems = document.querySelectorAll('.carrossel-item');
  let currentIndex = 0;

  function showNextSlide() {
    carrosselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carrosselItems.length;
    carrosselItems[currentIndex].classList.add('active');
  }

  
  carrosselItems[currentIndex].classList.add('active');

  
  setInterval(showNextSlide, 4000);
});
