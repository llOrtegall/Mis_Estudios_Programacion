const func1 = (dato) => {
    return dato
}

const funn2 = (d) => {
    console.log(d);
}

func1(funn2('Manuel'));

function Dividir(a, b) {
    const resultado = a / b;
    return resultado
}

const Dividir2 = (z, x) => {
    let resultado = z / x;
    return resultado
}

console.log(Dividir(10, 2));
console.log(Dividir2(20, 3));

// Paso por valor

let variable = 10;

function cambiarValor(parametro) {
    return parametro = 20;
}

cambiarValor(variable);

// Paso por referencia

function cambiarValor2(parametro) {
    parametro[0] = 20;
}

let arreglo = [10]
console.log('antes de la función ' + arreglo);
cambiarValor2(arreglo);
console.log(arreglo);