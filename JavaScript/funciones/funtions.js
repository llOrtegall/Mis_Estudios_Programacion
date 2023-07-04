//TODO: Declaración de la función

function MiFunction(a, /* Argumentos de la función */ b) {
    //TODO: Cuerpo de la función
    // ? console.log('Suma: ' + (a + b));   
    return a + b;
}
//TODO: Debemos llamar la función y pasar los valores para la función
let resultado = MiFunction(2, 3);

console.log(resultado);

// * funtions anonymous declarations de tipo expression
let x = function (a, b) { return a + b };

resultado = x(1, 2);
console.log(resultado);

(function(a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

// TODO: Arrows Función
const sumarFuntion = (a, b) => a + b;

resultado = sumarFuntion(1, 2);
console.log(resultado);
