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

  //* Elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)

  //* Vaciar carrito
  vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = []; //* Reseteamos carrito
    limpiarHtml(); // * eliminamos el html
  })
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

//Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id');

    // ? Elimina del arreglo usando el filter por el data id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    carritoHtml();

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

  //* Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
  //console.log('existe', existe);
  if (existe) {
    // ? actualizamos la cantidad
    const cursos = articulosCarrito.map(curso => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //?agregamos al carrito
    //* agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHtml();
}

//* Muestra el carrito de compras en el Html
function carritoHtml() {

  //*Primero se Limpia El HTML
  limpiarHtml();


  articulosCarrito.forEach(curso => {

    const { image, titulo, price, cantidad } = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${image}" width="60"></td>
      <td class="texto"><p>${titulo}</p></td>
      <td class="texto"><p>${price}</p></td>
      <td class="texto"><p>${cantidad}</p></td> 
      <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}"> x </a>
      </td>
    `;
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