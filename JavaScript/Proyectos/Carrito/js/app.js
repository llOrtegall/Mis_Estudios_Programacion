const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');

let articulosCarrito = [];

loadEventListeners();

function loadEventListeners() {
  listaCursos.addEventListener('click', addToCourse);
  carrito.addEventListener('click', deleteCourse);
  vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHtml();
  });
}

// TODO: Funciones
function addToCourse(ev) {
  ev.preventDefault();
  if (ev.target.classList.contains('agregar-carrito')) {
    const courseSelected = ev.target.parentElement.parentElement;
    readDataCourse(courseSelected);
  }
}

function deleteCourse(ev) {
  if (ev.target.classList.contains('borrar-curso')) {
    const courseId = ev.target.getAttribute('data-id');
    // Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(course => course.id !== courseId);
    cartHtml(); // Iterar sobre el carrito y mostrar su HTML
  }
}

function readDataCourse(course) {
  const infoCourse = {
    image: course.querySelector('img').src,
    titulo: course.querySelector('h4').textContent,
    precio: course.querySelector('.precio span').textContent,
    id: course.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  // Revise si un elemento ya existe
  const existe = articulosCarrito.some(course => course.id === infoCourse.id);

  if (existe) {
    const cursos = articulosCarrito.map(curso => {
      if (curso.id === infoCourse.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    })
    articulosCarrito = [...cursos];
  } else {
    // Agregar elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCourse];
  }

  cartHtml();

}

function cartHtml() {
  // Limpiar el HTML
  limpiarHtml();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach(curso => {
    const { image, titulo, precio, cantidad, id } = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${image}" width="100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
    `;
    contenedorCarrito.appendChild(row);
  })
}

// Elimina los cursos del tbody
function limpiarHtml() {
  // Forma lenta
  // contenedorCarrito.innerHTML = '';

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

}
