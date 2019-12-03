export class Point {
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public x: number;
    public y: number;
    equal = (check: Point): number =>
    {
        if (this.x === check.x && this.y === check.y) {
            return 0;
        }
        if ((this.x === check.x && this.y > check.y) || (this.x > check.x && this.y === check.y)) {
            return 1;
        }

        return -1;
    }

    toString = () => {
        return this.x + "," + this.y;
    }
}
