interface Pizza {
  name: string
  toppings: Readonly<string[]>
}

const pizza: Readonly<Pizza> = {
  name: 'Peperoni',
  toppings: ['Tomato', 'Mozarella', 'Basil']
}

// pizza.name = "Pollo y Champinones";
// pizza.toppings.push('pollo')