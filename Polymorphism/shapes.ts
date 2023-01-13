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

// As you can see the class Rectangle is implementing Shape interface and has the same method getArea which has different implementation.

// We can create instances of the Rectangle class and use it to call the getArea method:

let rectangle = new Rectangle(5, 10);
console.log(`Area of rectangle is ${rectangle.getArea()}`);

// With this, you should see following output:

// Area of rectangle is 50
