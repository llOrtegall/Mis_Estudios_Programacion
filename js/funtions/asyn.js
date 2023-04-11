/** 
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) ----> Trasnformamos a json 
    .then(json => console.log(json))
    .catch(e => console.log(e))  -----> Capturar error si lo tiene
    .finally(() => console.log('Termino Proceso'))

**/

/** crear funcion asincrona **/
const getUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json() //convertir a json 
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

getUser();
