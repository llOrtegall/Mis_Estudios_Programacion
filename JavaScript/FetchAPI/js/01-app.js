const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

  const url = '/JavaScript/FetchAPI/data/datos.txt';

  // fetch API contiene el reject y resolve
  fetch(url)
    .then(repuesta => {
      /** console.log(repuesta);
      console.log('El Status Es: ' + repuesta.status);
      console.log(repuesta.statusText);
      console.log(url);
      console.log(typeof (repuesta));**/
      return repuesta.text()
    })
    .then(datos => {
      console.log(datos);
    })
    .catch(error => {
      console.log(error);
    })
}