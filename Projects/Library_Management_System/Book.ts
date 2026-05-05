import { Author } from './Author.js';

export class Book {
    private _title: string;
    private _author: Author | null;
    private _isCheckedOut: boolean;

    constructor(title: string, author: Author) {
        this._title = title;
        if (author instanceof Author) {
            this._author = author;
        } else {
            console.log("Invalid author: must be Author instance");
            this._author = null;
        }
        this._isCheckedOut = false;
    }
    get title(): string { return this._title; }
    get authorInfo(): string | null { return this._author instanceof Author ? this._author.name : null; }
}