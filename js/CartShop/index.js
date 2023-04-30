//* Variables
const carrito = document.querySelector('#cartshopp');
const listCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('.vaciarCart');
let articulosCarrito = [];

loadEventListeners();

function loadEventListeners() {
  //* Cuando se agrega el curso
  listCursos.addEventListener('click', agregarCurso)
}

//* Funciones

function agregarCurso(e) {
  //*previene el enlace
  e.preventDefault();

  if (e.target.classList.contains('add_cart')) {

    const cursoSeleccionado = e.target.parentElement.parentElement;
    const imgSeleccionada = e.target.parentElement.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado, imgSeleccionada);
  }
}

//* leer el contenido del html 
function leerDatosCurso(curso, img) {
  //console.log(curso, img);

  //creando un objeto
  const infoCurso = {
    image: img.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    price: curso.querySelector('.precio').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  //console.log('infoCurso', infoCurso);
  //* agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log('articulosCarrito', articulosCarrito);

  carritoHtml();
}

//* Muestra el carrito de compras en el Html
function carritoHtml() {

  //*Primero se Limpia El HTML
  limpiarHtml();


  articulosCarrito.forEach(curso => {
    console.log(curso);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${curso.image}" width="100"></td>
      <td><p>${curso.titulo}</p></td>
      <td><p>${curso.price}</p></td>
    <td><p>${curso.cantidad}</p></td> `;
    //*agrega el html del carrito en tbody
    contenedorCarrito.appendChild(row);
  })

}


//*Elimina Los cursos del tbody
function limpiarHtml() {

  //forma lenta
  //contenedorCarrito.innerHTML = '';

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}