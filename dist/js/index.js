"use strict";
let x = 10;
x = 12;
console.log(x);
let y = 12;
let firstName = 'Peter';
let age = 18;
const isMale = true;
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers.length);
myNumbers.push(6);
let myTuple = ['Peter', 18, ['a', 'b', 'c']];
const person = {
    name: 'Peter',
    age: 18
};
console.log(person);
console.log(person.name);
let a = 0;
a = 'hello';
a = true;
a = [1, 2, 3];
let id = 0;
id = 'abc';
const userId = 10;
const postId = 'abc';
var Size;
(function (Size) {
    Size["s"] = "small";
    Size["m"] = "medium";
    Size["l"] = "large";
})(Size || (Size = {}));
const shirt = {
    name: 'shirt',
    size: Size.s
};
console.log(shirt);
let test;
test = "any";
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Peter'));
function logger(msg) {
    console.log(msg);
}
logger('teste');
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }
    console.log(`Hello ${name}`);
}
greeting('Peter', 'Mr.');
function sumNumber(nums) {
    return nums.a + nums.b;
}
console.log(sumNumber({ a: 1, b: 2 }));
function multiplyNumber(nums) {
    return nums.a * nums.b;
}
console.log(multiplyNumber({ a: 1, b: 2 }));
const someNumber = {
    a: 1,
    b: 2
};
console.log(multiplyNumber(someNumber));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
    }
    else {
        console.log('Não é um número');
    }
}
doSomething(1);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`The user name is ${this.name}`);
    }
    showUserRole() {
        console.log(`The user role is ${this.role}`);
    }
    showUserIsApproved(canShow) {
        if (canShow) {
            console.log(`The user is ${this.isApproved ? 'approved' : 'not approved'}`);
        }
        console.log('You are not allowed to see this information');
    }
}
const user1 = new User('Peter', 'admin', true);
console.log(user1);
user1.showUserName();
user1.showUserRole();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`The brand is ${this.brand}`);
    }
}
const car1 = new Car('BMW', 4);
car1.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
a4.showBrand();
