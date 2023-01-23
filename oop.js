/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use # to make a property private
 */

// class Car {
//   #mileage;
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getMileage() {
//     return this.#mileage;
//   }

//   setMileage(value) {
//     this.#mileage = value;
//   }

//   static engine(type) {
//     console.log(`${type} Vroom Vroom`);
//   }
// }

// let car = new Car("Toyota", "Camry");
// // car.mileage = 100; // this will not work, returns undefined
// car.setMileage(100);
// console.log(car.getMileage());
// Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use weakmap to make a property private
 */

// const _mileage = new WeakMap();

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     _mileage.set(this, 0);
//   }

//   getMileage() {
//     return _mileage.get(this);
//   }

//   setMileage(value) {
//     _mileage.set(this, value);
//   }

//   static engine(type) {
//     console.log(`${type} Vroom Vroom`);
//   }
// }

// let car = new Car("Toyota", "Camry");
// car.mileage = 100; // this will not work
// // car.setMileage(100);
// console.log(car.getMileage());
// // Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use symbol to make a property private
 */

// const _mileage = Symbol();

// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this[_mileage] = 0;
//   }

//   getMileage() {
//     return this[_mileage];
//   }

//   setMileage(value) {
//     this[_mileage] = value;
//   }

//   static engine(type) {
//     console.log(`${type} Vroom Vroom`);
//   }
// }

// let car = new Car("Toyota", "Camry");
// car.mileage = 100; // this will not work
// // car.setMileage(100);
// console.log(car.getMileage());
// Car.engine("V8");

/**
 * Create a property mileage in class car and make it private
 * Create a static method called engine
 * use closure to make a property private
 */

function Car(make, model) {
  let mileage = 0;

  this.make = make;
  this.model = model;

  this.getMileage = function () {
    return mileage;
  };

  this.setMileage = function (value) {
    mileage = value;
  };
}

let car = new Car("Toyota", "Camry");
car.mileage = 100; // this will not work
// car.setMileage(100);
console.log(car.getMileage());
