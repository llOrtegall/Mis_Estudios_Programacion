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

  constructor (tax: number, amount: number) {
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

type Beer = {
  name: string,
  price: number,
  alcohol: number
}

function show (beer: Beer) {
  console.log(beer);
}

show({name: 'Corona', price: 50, alcohol: 4.5});