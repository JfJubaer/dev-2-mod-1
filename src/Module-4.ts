// class Animal {
//   name: string;
//   species: string;
//   //   sound: string;
//   constructor(name: string, species: string, public sound: string) {
//     this.name = name;
//     this.species = species;
//     // this.sound = sound;
//   }
//   makesound() {
//     console.log(`this ${this.name} sounds ${this.sound}`);
//   }
// }

// const dog = new Animal("desi kukur", "dog", "ghew");

// dog.makesound();

// inheritence

// class Parent {
//   constructor(public name: string, public age: number) {}
//   makeSleep(hours: number): string {
//     return `make sleep ${hours}`;
//   }
// }

// class student extends Parent {
//   constructor(name: string, age: number, public roll: number) {
//     super(name, age);
//   }
// }

// const newStudent = new student("mofif", 23, 22);

// type gaurd

// const add = (num1: string | number, num2: string | number): any => {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     return num1.toString() + num2.toString();
//   }
// };

// console.log(add(1, 2));

// type normalType = {
//   name: string;
// };

// const normalUser: normalType = {
//   name: "kalu",
// };

// type adminType = {
//   name: string;
//   role: "admin";
// };

// const admin1: adminType = {
//   name: "alu",
//   role: "admin",
// };

// function getUser(user: normalType | adminType): string {
//   if ("role" in user) {
//     return `I am an admin`;
//   } else {
//     return `Not an admin`;
//   }
// }

// console.log(getUser(normalUser));

// class Animal {
//   constructor(public name: string, public species: string) {}
//   makesoung() {}
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log("I am berking");
//   }
// }
// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeow() {
//     console.log("I am Meowing");
//   }
// }

// const kutta = new Dog("Kalu", "Desi");

// const billu = new Cat("billu", "Desi");

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeow();
//   } else {
//     animal.makesoung();
//   }
// }

// getAnimal(billu);

// access modifier

// class bankAccount {
//   constructor(public name:string,private balance: number){

//   }
// }

// const myAccount = new bankAccount('shorif',29);

// getter and setter

// class bankAccount {
//   constructor(public name: string, public balance: number) {}
//   private getBalacne() {
//     return `balance is ${this.balance}`;
//   }
//   get balance1(): number {
//     return this.balance;
//   }
//   set deposit(amount: number) {
//     this.balance = this.balance + amount;
//   }
//   // setBalance(amount: number) {
//   //   return (this.balance = this.balance + amount);
//   // }
// }

// const myAccount = new bankAccount("shorif", 29);

// myAccount.deposit = 21;
// console.log(myAccount.balance);

// static class

// class Counter {
//   static counter: number = 0;

//   static increment(): number {
//     return (Counter.counter = Counter.counter + 1);
//   }
//   static decrement(): number {
//     return (Counter.counter = Counter.counter - 1);
//   }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());

// Polymorphisom

// class Shape {
//   getArea() {}
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// class Rectangle extends Shape {
//   constructor(public height: number, public width: number) {
//     super();
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// function getShape(param: Shape) {
//   console.log(param.getArea());
// }

// getShape(new Circle(10));
// getShape(new Rectangle(10, 20));

// interface car {
//   start(): void;
//   stop(): void;
// }

// abstract class MyCar {
//   constructor(public name: string) {}
//   abstract start(): void;
//   stop(): void {}
// }

// class newCar extends MyCar {
//   start(): void {
//     console.log("Hello car");
//   }
// }

// const vehicle1 = new newCar("BMW");
