class Sale {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getTotal(): number {
    return this.amount;
  }
}

// TODO: extends es para heredar de una clase
class SaleWithTas extends Sale {
  private tax: number;

  constructor(tax: number, amount: number) {
    super(amount); // call the parent constructor
    this.tax = tax;
  }
  // TODO: la palabra override se asegura que el metodo que se esta sobreescribiendo exista en la clase padre
  override getTotal(): number {
    return super.getTotal() + this.tax;
  }
}

let sale = new Sale(450);
const res = sale.getTotal();
let saleWithTax = new SaleWithTas(50, 300);
const res2 = saleWithTax.getTotal();

// TODO: Types
type Beer = {
  name: string,
  price: number,
  alcohol: number
}

function show(beer: Beer) {
  console.log(beer);
}

show({ name: 'Corona', price: 50, alcohol: 4.5 });


// TODO: Interfaces
interface Drink {
  name: string,
  price: number,
}

interface AlcoholLicDrink extends Drink {
  alcohol: number
  showInfo(): string
}

interface MixedDrink {
  ingredients: string[]
}

const drink1: Drink = {
  name: 'Redbull',
  price: 120
}

class Wine implements AlcoholLicDrink {
  alcohol: number;
  price: number;
  name: string;

  constructor(name: string, alcohol: number, price: number) {
    this.name = name;
    this.alcohol = alcohol;
    this.price = price;
  }

  showInfo(): string {
    return `Drink: ${this.name}, Alcohol: ${this.alcohol}`;
  }
}

class CokTail implements AlcoholLicDrink, MixedDrink {
  alcohol: number;
  name: string;
  ingredients: string[];
  price: number;

  constructor(name: string, alcohol: number, price: number, ingredients: string[]) {
    this.name = name;
    this.alcohol = alcohol;
    this.ingredients = ingredients;
    this.price = price;
  }

  showInfo(): string {

    const ingredientsInfo = this.ingredients.reduce((acc, element) => acc + " " + element + ",", "");

    return `Drink: ${this.name}, Alcohol: ${this.alcohol}, Ingredients: ${ingredientsInfo}`
  }
}

const margarita = new CokTail('Margarita', 10, 150, ['Lemon', 'Salt', 'Tequila']);
const rioja = new Wine('Rioja', 12, 200);
const malbet = new Wine('Malbet', 14, 250);

const ad: AlcoholLicDrink[] = [
  margarita, rioja, malbet
]

function showDrinks (drinks: AlcoholLicDrink[]) {
  drinks.forEach(e => console.log(e.showInfo()));
}

showDrinks(ad);