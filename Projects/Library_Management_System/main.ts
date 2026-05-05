import { Author } from "./Author.js";
import { Book } from "./Book.js";

// Tests
const author = new Author('J.K. Rowling');
const book = new Book('Harry Potter', author);

console.log('Book title:', book.title); // Should output: "Book title: Harry Potter"
console.log('Author:', book.authorInfo); // Should output: "Author: J.K. Rowling"