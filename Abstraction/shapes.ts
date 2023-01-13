// Abstraction is a technique in OOP that allows you to simplify complex systems by creating an interface that hides the underlying implementation details.

// By using abstraction, you can create objects that are easy to use, maintain, and understand.

// In TypeScript, you can create an abstract class by using the abstract keyword. An abstract class cannot be instantiated and can only be used as a base class for other classes. Here's an example of an abstract class called Shape:

abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  sideLength: number;

  constructor(sideLength: number) {
    super();
    this.sideLength = sideLength;
  }

  getArea(): number {
    return this.sideLength ** 2;
  }
}

const square = new Square(5);
console.log(square.getArea());

// This code defines an abstract class called Shape that has a single abstract method getArea().

// An abstract class is a class that cannot be instantiated on its own, it serves as a base class for other classes that will provide concrete implementations of the abstract methods.

// The Square class extends the Shape class and provides a concrete implementation of the getArea() method. The Square class has a single property sideLength which is set in the constructor.

// The getArea() method calculates and returns the area of the square by squaring the sideLength property.

// The code then creates an instance of the Square class called square with a side length of 5.

// Finally, it calls the getArea() method on the square instance and logs the result to the console, which is 25 in this case.
