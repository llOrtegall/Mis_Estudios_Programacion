const button = document.querySelector('button');

button.addEventListener('click', () => {
  // recuperar el id
  const id = button.getAttribute('data-id');

  if (button.classList.contains('liked')) {
    button.classList.remove('liked')
    button.innerText = 'Me gusta'
  } else {
    button.classList.add('liked')
    button.innerText = 'Quitar Me Gusta'
  }

})

