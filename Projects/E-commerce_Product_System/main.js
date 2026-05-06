import { Product } from './product.js';
import { PhysicalProduct } from './physicalProduct.js';

const book = new Product('Book', 20);
const laptop = new PhysicalProduct('Laptop', 1000, 5);

console.log(book.getDescription()); // Should show: "Book - $20"
console.log(laptop.getDescription()); // Should show: "Laptop - $1000  (5 lbs)"

console.log(`Shipping cost for laptop: $${laptop.calculateShipping()}`); // Should show: "Shipping cost for laptop: $2.5"

console.log(`Book price: $${book.getPrice()}`); // Should show: "20"
console.log(`Laptop price: $${laptop.getPrice()}`); // Should show: "1000"