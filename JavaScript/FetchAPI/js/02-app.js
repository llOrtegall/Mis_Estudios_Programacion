const loadJsonBtn = document.querySelector('#cargarJSON');
loadJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

  const url = '/JavaScript/FetchAPI/data/empleado.json';

  fetch(url)
    .then(res => res.json())
    .then(res => showHtml(res))
}

function showHtml({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector('.contenido');
  contenido.innerHTML = `
  <p>Empleado: ${nombre}</p>
  <p>ID: ${id}</p>
  <p>Empresa: ${empresa}</p>
  <p>Trabajo: ${trabajo}</p>
  `;
}