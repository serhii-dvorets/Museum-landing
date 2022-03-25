const emailForm = document.querySelector('form');
const emailInput = document.querySelector('.subscription__button-link--title');

emailForm.addEventListener('submit', (event) => {
  emailForm.elements.input.value = '';
  window.scrollTo(0, 0);
});
