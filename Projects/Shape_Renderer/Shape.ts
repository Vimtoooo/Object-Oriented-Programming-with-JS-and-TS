export class Shape {

    public color: string;

    constructor(color: string) {
        this.color = color;
    }

    describe(): string { return `A ${this.color} shape`; }
}