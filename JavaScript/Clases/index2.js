class Automovil {
  constructor(marca, color, precio) {
    this._marca = marca
    this._color = color
    this._precio = precio
  }

  get marca() {
    return this._marca
  }

  set marca(nombre) {
    this._marca = nombre
  }

}

const auto1 = new Automovil('Mazda', 'Verde', 41000)

console.log(auto1);

auto1.marca = 'Chevrolet'

console.log(auto1);