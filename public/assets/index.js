// --- Menu Burger ---

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const bars = document.querySelectorAll('.bar');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
  bars.forEach(bar => {
    bar.classList.toggle('active');
  });
});

// --- Menu Burger ---


// --- Btn like ---

function submitForm() {
  document.getElementById('voteForm').submit();
}

// --- Btn like ---

// --- Carrousel ---

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
});

// --- Carrousel ---