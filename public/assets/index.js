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