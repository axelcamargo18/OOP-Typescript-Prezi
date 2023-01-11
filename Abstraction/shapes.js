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
// Notice that the Shape class has two abstract methods, getArea and getPerimeter, that are not implemented.
// These methods are meant to be implemented by the classes that inherit from the Shape class.
// Here's an example of a class that inherits from the Shape class:
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
// In this example, the Rectangle class extends the Shape class and implements the getArea and getPerimeter methods.
//  The Rectangle class has its own constructor method, which takes in width and height parameters.
// Now let's create an instance of the Rectangle class and use it to call the methods:
var rectangle = new Rectangle(5, 10);
console.log("Area of rectangle is ".concat(rectangle.getArea()));
console.log("Perimeter of rectangle is ".concat(rectangle.getPerimeter()));
// Area of rectangle is 50
// Perimeter of rectangle is 30
// Here, the Rectangle class is using the abstraction provided by the Shape class to hide the implementation details of calculating the area and perimeter of the rectangle, and instead, it provides a simple interface for getting the area and perimeter.
// This is a basic example of abstraction in TypeScript. By creating an abstract class, you can define a common interface for a group of related objects and hide the implementation details from the user.
