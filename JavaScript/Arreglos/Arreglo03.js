const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
const numeros = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arreglo = [1, 'Hola', 2, 'Mundo', true, false, null, undefined, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3, 4, 5]]

console.table(meses)

// TODO: Recorrer un Arreglo
console.log(meses.length);

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}