function NombreFuncion(){
    console.log('saludo');
    
}
NombreFuncion();

const Saludo = () => console.log('Saludar desde Arrow Funtions');

Saludo();

const Saludar = (a, b, c)  => {
    console.log(a);
    console.log(b);
    console.log(c);
}

Saludar(3, 'Manuel', true);

const Saludar2 = (a, b, c) => {
    return a + b + c;
}

console.log(Saludar2(3, 4, 5));
