document.addEventListener('visibilitychange', ()=> {
    
    if(document.visibilityState === 'visible'){
        console.log('visible reproductor activo');
    }else if(document.visibilityState === 'hidden'){
        console.log('hidden reproductor inactivo');
    }

})