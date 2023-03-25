const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      button.innerHTML = 'Me Gusta';
    } else {
      button.classList.add('liked');
      button.innerHTML = 'Quitar Me Gusta';
    }
  })
})