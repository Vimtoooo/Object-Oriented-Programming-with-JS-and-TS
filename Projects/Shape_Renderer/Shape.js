export class Shape {

    static totalShapes = 0;

    constructor(color) {
        this.color = color;
        Shape.totalShapes++;
    }

    describe() { return `A ${this.color} shape`; }

    static getTotalCreated(){ return Shape.totalShapes; }
}