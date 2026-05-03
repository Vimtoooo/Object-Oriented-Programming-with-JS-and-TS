import { Shape } from "./Shape.js";

export class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    describe() { return `${super.describe()} (Circle with radius ${this.radius})`; }

    calculateArea() { return Math.PI * Math.pow(this.radius, 2); }
}