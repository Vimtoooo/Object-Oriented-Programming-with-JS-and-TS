import { Shape } from "./Shape.ts";

export class Circle extends Shape {
    public radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
}