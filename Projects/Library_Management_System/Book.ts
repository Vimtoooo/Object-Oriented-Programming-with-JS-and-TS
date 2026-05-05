import { Author } from './Author.js';

export class Book {
    private _title: string;
    private _author: Author;
    private _isCheckedOut: boolean;

    constructor(title: string, author: Author) {
        this._title = title;
        this._author = author;
        this._isCheckedOut = false;
    }
    get title(): string { return this._title; }
    get authorInfo(): string { return this._author.name; }
}