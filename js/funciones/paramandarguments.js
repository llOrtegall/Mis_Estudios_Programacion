let sumar = function(a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};

resultado1 = sumar(3, 2);
console.log('La Suma Es: ' + resultado1);


function SumarTodo(){
    let suma = 0; // * iniciamos la suma en 0
    for(let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // * Tenemos cada uno de los
        //TODO: suma = suma + arguments[i];
    }
    return suma;
}

let resultado2 = SumarTodo(5, 4, 13, 10, 9);
console.log('La Suma Es: ' + resultado2);
