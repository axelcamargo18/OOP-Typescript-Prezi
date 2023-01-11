// Polymorphism is a technique in OOP that allows you to create a single interface that can be used by multiple classes.

// This allows you to write more flexible and reusable code.

// In TypeScript, you can create a polymorphic interface by defining a method with the same name in multiple classes.

// Here's an example of an interface called Shape:

interface Shape {
  getArea(): number;
}

// This interface has a method called getArea which is used to calculate the area of a shape.

// We can create multiple classes that implement this interface like this:

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// As you can see both the classes Rectangle and Circle are implementing Shape interface and have the same method getArea which has different implementation.

// We can create instances of the Rectangle and Circle classes and use them to call the getArea method:

let rectangle = new Rectangle(5, 10);
console.log(`Area of rectangle is ${rectangle.getArea()}`);

let circle = new Circle(5);
console.log(`Area of Circle is ${circle.getArea()}`);

// With this, you should see following output:

// Area of rectangle is 50
// Area of Circle is 78.53981633974483
