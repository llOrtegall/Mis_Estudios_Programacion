const loadJsonArrayBtn = document.querySelector('#cargarJSONArray');
loadJsonArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
  const url = '/JavaScript/FetchAPI/data/empleados.json';

  fetch(url)
    .then(res => res.json())
    .then(res => showHtml(res))

}

function showHtml(empleados) {

  const contenido = document.querySelector('.contenido');

  let html = '';

  empleados.forEach(emp => {
    const { id, nombre, empresa, trabajo } = emp;

    html += `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `
  });

  contenido.innerHTML = html;

}