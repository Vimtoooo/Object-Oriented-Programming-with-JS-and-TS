import { Shape } from "./Shape.js";

export class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}