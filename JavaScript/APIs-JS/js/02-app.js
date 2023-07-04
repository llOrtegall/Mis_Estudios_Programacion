document.addEventListener('DOMContentLoaded', ()=>{

    const observer = new IntersectionObserver( (entries) => {
        console.log(entries[0]);
        //Esto crea el observer
        if(entries[0].isIntersecting){
            console.log('Ya Esta Visible');
            //En ocasiones se utiliza el lazy loading o aplicar el scroll infinito ejemplos instagram facebook twitter
        }
    });

    observer.observe(document.querySelector('.premium'));

});