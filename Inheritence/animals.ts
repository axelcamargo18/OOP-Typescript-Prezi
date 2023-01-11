// Inheritance is a technique in OOP that allows you to create new classes that inherit the properties and methods of existing classes. 

// This allows you to reuse existing code and create a hierarchical relationship between classes.

// In TypeScript, you can create a class that inherits from another class by using the extends keyword. 

// Here's an example of a base class called Animal:

class Animals {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    makeSound() {
        console.log("Some sound");
    }
}


// This class has a name property, a constructor method, which will accept a name and set it to the name property of the class and two methods getName and makeSound which will return the name of animal and make some default sound respectively.

// We can create a new class called Dog that inherits from the Animals class like this:


class Dog extends Animals {
    constructor(name: string) {
        super(name);
    }
    makeSound() {
        console.log("Bark");
    }
}

// The Dog class inherits the properties and methods of the Animals class and adds its own implementation of the makeSound method.

// We can create an instance of the Dog class and use it to call the inherited methods:

let dog = new Dog("doggo");
console.log(`Name of dog is ${dog.getName()}`);
dog.makeSound();

// With this, you should see following output:

// Name of dog is doggo
// Bark