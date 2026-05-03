import { Shape } from "./Shape.ts";

export class Circle extends Shape {
    public radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    describe(): string { return `${super.describe()} (Circle with radius ${this.radius})`; }

    calculateArea(): number { return Math.PI * Math.pow(this.radius, 2); }
}