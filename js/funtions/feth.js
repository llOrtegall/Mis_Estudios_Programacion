//se llama el objecto

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) /** Trasnformamos a json */
    .then(json => console.log(json))
    .catch(e => console.log(e)) /* Capturar error si lo tiene*/
    .finally(() => console.log('Termino Proceso'))

    