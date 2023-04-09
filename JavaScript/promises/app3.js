const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo ejecutar el descuento');
    }
})

aplicarDescuento
    .then(resultado => {
        console.log(resultado);
    })
    .catch(err => {
        console.log(err);
    })

/* 
    Hay tres valores posibles de un promise.
    - fulfilled ----> El promise se cumplio
    - Rejected ----> El promise no se cumplio
    - pending ----> El promise no sabe si se cumple pero tampoco fue rechazado
*/