const loadJsonBtn = document.querySelector('#cargarJSON');
loadJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

  const url = '/JavaScript/FetchAPI/data/empleado.json';

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
    })
}