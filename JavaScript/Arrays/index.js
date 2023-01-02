const miArray = [
  {nombre: 'Monitor 22 "', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Mouse USB', precio: 500},
  {nombre: 'Torre (PC)', precio: 600},
  {nombre: 'Celular', precio: 700},
]

const nuevoArray = miArray.map( function(producto){
  return `${producto.nombre} - Precio: ${producto.precio}`
})

const nuevoArray2 = miArray.forEach( function(producto){
  return `${producto.nombre} - Precio: ${producto.precio}`
})

// map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// forEach ejecuta la función indicada una vez por cada elemento del array.

console.log(nuevoArray);
console.log(nuevoArray2);