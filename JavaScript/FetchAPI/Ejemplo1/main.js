fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => {
    const firts10objects = data.slice(0, 10);

  })
  .catch(err => console.error('Error: ', err))

mostrarData()