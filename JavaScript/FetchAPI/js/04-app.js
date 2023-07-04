const loadApiBtn = document.querySelector('#cargarAPI');
loadApiBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = 'https://picsum.photos/list';
  fetch(url)
    .then(res => res.json())
    .then(res => mostrarHtml(res));
}

function mostrarHtml(datos) {
  const contenido = document.querySelector('.contenido');
  let html = '';

  datos.forEach(perfil => {
    const { author, post_url } = perfil;
    html += `
      <p>Author: ${author} </p>
      <a href="${post_url}" target="_blank"> ver imagen <a/>
    `
  });

  contenido.innerHTML = html;
}