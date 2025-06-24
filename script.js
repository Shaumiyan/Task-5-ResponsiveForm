// Scroll-triggered animation for the container
const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  const rect = container.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    container.style.animation = 'fadeIn 1s forwards ease-in-out';
  }
});

// Simple Form Validation Enable/Disable Submit
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const requiredFields = ['fullName', 'email', 'message'];

form.addEventListener('input', () => {
  const allFilled = requiredFields.every(id => document.getElementById(id).value.trim() !== '');
  submitBtn.disabled = !allFilled;
});
