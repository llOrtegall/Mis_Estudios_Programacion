// * let autos = new Array('BMW', 'Mercedez Benz', 'Volvo');

const autos = ['BMW', 'Mercedez Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

// TODO: Ciclo for
for (let i = 0; i < autos.length; i++) {
    console.log(i + ' ' + autos[i]);
}

autos[1] = 'MercedezBenz';
console.log(autos[1]);

//TODO: método push para agregar al final una nueva variable

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'cadilalac';


console.log(autos);
console.log(Array.isArray(autos));
console.log( autos instanceof Array);
