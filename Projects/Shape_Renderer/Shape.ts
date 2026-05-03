export class Shape {

    static totalShapes: number = 0;

    public color: string;

    constructor(color: string) {
        this.color = color;
        Shape.totalShapes++;
    }

    describe(): string { return `A ${this.color} shape`; }

    static getTotalCreated(): number { return Shape.totalShapes; }
}