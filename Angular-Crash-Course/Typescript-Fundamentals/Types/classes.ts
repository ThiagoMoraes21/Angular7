class Point {
    x: number;
    y: number;

    // the '?' makes the parameters optional
    constructor(x?:number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x, ', Y: ' + this.y);
    }
}

let point = new Point();
point.draw();