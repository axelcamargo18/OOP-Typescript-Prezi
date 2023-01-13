// In object-oriented programming (OOP), encapsulation is a mechanism that prevents the direct access or modification of an object's internal state.

// It allows objects to be treated as a single, self-contained entity and ensures that the internal state of an object can only be modified through a defined set of methods.

// Encapsulation is often used to hide the implementation details of an object and protect its internal state from being accessed or modified by external actors.

// It's main purpose is to protect the integrity of the data and internal logic of objects by making it inaccessible to the outside world, and therefore provides a way to control the access to an object's internal state

// Essentially grouping of functions and variables into objects //

// The functions within these objects are methods and the variables are properties //

// Procedural implementation //

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return (baseSalary = overtime * rate);
}

// --------------------------- //

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return (this.baseSalary = this.overtime * this.rate);
  },
};

employee.getWage();
