const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('El resultado es: ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {

    if (Notification.permission === 'granted') {
        const notification = new Notification('Esta es la notificación', {
            icon: '/JavaScript/APIs-JS/img/ccj.png',
            body: 'aprende Codigo Con JUAN',
        });
        notification.onclick = () => {
            window.open('https://www.google.com', '_blank');
        }
    }
});
