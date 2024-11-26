const buttons = document.querySelectorAll('.redirect-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = button.dataset.url;
  });
});
