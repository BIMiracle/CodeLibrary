// function Person (name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(this.name);
// }

// console.log(Person.prototype.constructor == Person);
// let p = new Person.prototype.constructor('Alice');

// console.log(p.__proto__ === Person.prototype);

// console.log(Object.getPrototypeOf(p) === p.__proto__);
// console.log(Object.getPrototypeOf(p) === Person.prototype);

// console.log(p.constructor === Person);
// console.log(p.__proto__ === p.constructor.prototype)
// console.log(p.constructor);

// console.log(Person.prototype);

// p.sayName(); // Output: "Alice"


function a () { }

const b = new a()

console.log(b.__proto__ === a.prototype);

const c = new Function()

console.log(Function.prototype === Function.__proto__);

// console.log(c.__proto__ == b.__proto__.__proto__);
console.log(a.__proto__ == Function.prototype);