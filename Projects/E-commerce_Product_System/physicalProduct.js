import { Product } from './product.js';

export class PhysicalProduct extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  
  getDescription() {
    return `${this.name} - $${this.price} (${this.weight} lbs)`;
  }
  
  calculateShipping() { return this.weight * 0.5; }
}