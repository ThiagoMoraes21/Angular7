var Point = /** @class */ (function () {
    // the '?' makes the parameters optional
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
