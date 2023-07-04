Existe, sin embargo, un valor especial en JavaScript, null, que es considerado un bug en el lenguaje. El operador typeof devuelve "object" cuando se usa con null:

typeof null // "object"
Lo correcto sería que typeof null devolviera "null", pero es un error histórico que no se puede corregir sin romper el código existente.

Por eso, si quieres comprobar si una variable es null, debes usar la comparación estricta ===:

const foo = null
foo === null // true
Otra pregunta es... ¿Qué es ese object? Es un tipo de dato que está en el centro de JavaScript y que veremos en detalle más adelante.

Usando con operadores de comparación
El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

const age = 42
typeof age === "number" // true