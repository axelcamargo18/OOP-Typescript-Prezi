// Polymorphism is a technique in OOP that allows you to create a single interface that can be used by multiple classes.
// This interface has a method called getArea which is used to calculate the area of a shape.
// We can create multiple classes that implement this interface like this:
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// As you can see the class Rectangle is implementing Shape interface and has the same method getArea which has different implementation.
// We can create instances of the Rectangle class and use it to call the getArea method:
var rectangle = new Rectangle(5, 10);
console.log("Area of rectangle is ".concat(rectangle.getArea()));
// With this, you should see following output:
// Area of rectangle is 50
