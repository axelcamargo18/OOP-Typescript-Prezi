// Inheritance is a technique in OOP that allows you to create new classes that inherit the properties and methods of existing classes. 
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
// This allows you to reuse existing code and create a hierarchical relationship between classes.
// In TypeScript, you can create a class that inherits from another class by using the extends keyword. 
// Here's an example of a base class called Animal:
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.getName = function () {
        return this.name;
    };
    Animals.prototype.makeSound = function () {
        console.log("Some sound");
    };
    return Animals;
}());
// This class has a name property, a constructor method, which will accept a name and set it to the name property of the class and two methods getName and makeSound which will return the name of animal and make some default sound respectively.
// We can create a new class called Dog that inherits from the Animals class like this:
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animals));
// The Dog class inherits the properties and methods of the Animals class and adds its own implementation of the makeSound method.
// We can create an instance of the Dog class and use it to call the inherited methods:
var dog = new Dog("doggo");
console.log("Name of dog is ".concat(dog.getName()));
dog.makeSound();
// With this, you should see following output:
// Name of dog is doggo
// Bark
