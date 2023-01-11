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
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
// As you can see both the classes Rectangle and Circle are implementing Shape interface and have the same method getArea which has different implementation.
// We can create instances of the Rectangle and Circle classes and use them to call the getArea method:
var rectangle = new Rectangle(5, 10);
console.log("Area of rectangle is ".concat(rectangle.getArea()));
var circle = new Circle(5);
console.log("Area of Circle is ".concat(circle.getArea()));
// With this, you should see following output:
// Area of rectangle is 50
// Area of Circle is 78.53981633974483
