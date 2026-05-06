export class Product {
  #price; // Private field for encapsulation
  
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
  
  // Getter for price
  get price() {
    return this.#price;
  }
  
  // Setter with validation
  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log('Price must be positive');
    }
  }
  
  getPrice() { return this.#price; }
  getDescription() { return `${this.name} - $${this.#price}`; }
}