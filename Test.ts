export class Book {
    // Properties:
    public title: string;
    public author: string;
    public pages: number;
    
    // Add a constructor that takes title, author, and pages parameters
    constructor(title: string, author: string, pages: number) {
        // Set the title, author, and pages parameters as properties.
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    // Add a method called getInfo that returns a string in the format: “Title: [title], Author: [author], Pages: [pages]”
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    };
};