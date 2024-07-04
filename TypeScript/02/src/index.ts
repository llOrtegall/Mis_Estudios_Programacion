class Sale {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public getTotal(): number {
    return this.amount;
  }
}

class SaleWithTas extends Sale {
  private tax: number;

  constructor (tax: number, amount: number) {
    super(amount); // call the parent constructor
    this.tax = tax;
  }

  public getTotal(): number {
    return super.getTotal() + this.tax;
  }
}

let sale = new Sale(450);
// sale.amount = 500;
const res = sale.getTotal();
console.log(res);

let saleWithTax = new SaleWithTas(50, 300);

const res2 = saleWithTax.getTotal();

console.log(res2);
