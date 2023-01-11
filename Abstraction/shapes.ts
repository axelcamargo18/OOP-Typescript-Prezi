// Abstraction is a technique in OOP that allows you to simplify complex systems by creating an interface that hides the underlying implementation details.

// By using abstraction, you can create objects that are easy to use, maintain, and understand.

// In TypeScript, you can create an abstract class by using the abstract keyword. An abstract class cannot be instantiated and can only be used as a base class for other classes. Here's an example of an abstract class called Shape:

abstract class Shape {
  constructor() {}
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

// Notice that the Shape class has two abstract methods, getArea and getPerimeter, that are not implemented.

// These methods are meant to be implemented by the classes that inherit from the Shape class.

// Here's an example of a class that inherits from the Shape class:

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// In this example, the Rectangle class extends the Shape class and implements the getArea and getPerimeter methods.

//  The Rectangle class has its own constructor method, which takes in width and height parameters.

// Now let's create an instance of the Rectangle class and use it to call the methods:

let rectangle = new Rectangle(5, 10);
console.log(`Area of rectangle is ${rectangle.getArea()}`);
console.log(`Perimeter of rectangle is ${rectangle.getPerimeter()}`);

// Area of rectangle is 50
// Perimeter of rectangle is 30

// Here, the Rectangle class is using the abstraction provided by the Shape class to hide the implementation details of calculating the area and perimeter of the rectangle, and instead, it provides a simple interface for getting the area and perimeter.

// This is a basic example of abstraction in TypeScript. By creating an abstract class, you can define a common interface for a group of related objects and hide the implementation details from the user.
