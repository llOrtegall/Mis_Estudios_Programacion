window.addEventListener('online', actualizarestado);
window.addEventListener('offline', actualizarestado);

function actualizarestado() {
    if (navigator.onLine) {
        console.log('Estas Conectado');

    } else {
        console.log('Estas Desconectado');
    }
}
