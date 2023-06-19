/*
El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:
*/
const edad = 16

if (edad >= 18) {
    // * codigo que se ejecuta si es true
    console.log('Se Ejecutará la condicion');
} else {
    console.log('Se ejecutar la condicion si es false');
}

/* Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while. El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición.

En esta clase, vamos a explicar cómo funciona el bucle while en JavaScript y cómo podemos utilizarlo en nuestros programas */

let cuentaAtras = 10

while (cuentaAtras > 0) {
    //* se ejecuta hasta que deje de cumplirse la condición
    cuentaAtras = cuentaAtras - 1
    if (cuentaAtras === 5) {
        break
    }
    console.log(cuentaAtras + 'segundos');
}
console.log('Despegue');
