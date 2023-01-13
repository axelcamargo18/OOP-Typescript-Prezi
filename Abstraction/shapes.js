// Abstraction is a technique in OOP that allows you to simplify complex systems by creating an interface that hides the underlying implementation details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// By using abstraction, you can create objects that are easy to use, maintain, and understand.
// In TypeScript, you can create an abstract class by using the abstract keyword. An abstract class cannot be instantiated and can only be used as a base class for other classes. Here's an example of an abstract class called Shape:
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        var _this = _super.call(this) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    Square.prototype.getArea = function () {
        return Math.pow(this.sideLength, 2);
    };
    return Square;
}(Shape));
var square = new Square(5);
console.log(square.getArea());
