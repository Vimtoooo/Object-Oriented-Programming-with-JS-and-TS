export class Shape {

    constructor(color) {
        this.color = color;
    }

    describe() { return `A ${this.color} shape`; }
}