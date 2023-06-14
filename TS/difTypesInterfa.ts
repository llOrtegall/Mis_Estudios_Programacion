const canvas = document.getElementById('canvas') //* as HTMLCanvasElement;  estamos obligandolo a tratarlo así

//* puede retornar null si no lo encuentra o un HTML element

// TODO: pero nosotros necesitamos el canvasElement

// ?? como sabe TypeScript que estas realmente un elemento canvas R// No lo sabe

//* Esto es inferencia -> TS sabe que dentro del if solo es canvas a poder hacer HTML element
if (canvas != null && canvas instanceof HTMLCanvasElement) {
    //const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const ctx = canvas.getContext('2d');
}


type Heroe = {
    id: string;
    name: string;
    age: number;
}

const hero: Heroe = {
    id: '1',
    name: 'John',
    age: 36
}