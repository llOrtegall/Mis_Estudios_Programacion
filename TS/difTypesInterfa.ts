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
  saludar: () => void;
}

const hero: Heroe = {
  id: '1',
  name: 'John',
  age: 36,
  saludar: () => {
    console.log('saludar')
  }
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: Producto[];
}

const carrito: Zapatilla | CarritoDeCompras = {
  totalPrice: 0,
  talla: 32,
  productos: [
    {
      id: 1,
      nombre: 'carga',
      precio: 222
    }
  ],
}

interface Zapatilla extends Producto {
  talla: number;
}