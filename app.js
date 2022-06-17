// Object Oriented Programming
/*
// Person Constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    // The this keyword refers to the current instance of the object.
    // In this case it pertains to this person
    // console.log(this)
    this.birthday = new Date(dob);
    this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
console.log(this);
  // console.log(this) we get the window object
  //this.alert(1);
*/
//const brad = new Person('Brad', 30);
//const john = new Person('John', 32);

/*
const brad = new Person('Brad', '9-10-1981');
//console.log(brad.calculateAge());

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
//name2.foo = 'bar';
//console.log(name2);

//console.log(typeof name1);
//console.log(typeof name2);

if(name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}
// This is a string but is not a primitive value. It is an object.

// Number
const num1 = 5;
const num2 = new Number(5);
//console.log(num2)

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y) {
return x + y;
}
const getSum2 = new Function('x','y', 'return x + y')
//console.log(getSum2(1,4));

// Object
const john1 = {name: "John"};
const john2 = new Object({name:"John"});
//console.log(john1);
//console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
//console.log(arr1);
//console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
//console.log(re1);
// /\w+/ means a word expression that occurs one or more times
// We are looking for w+
//console.log(re2);

// Object Prototype


function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    //this.calculateAge = function(){
      //const diff = Date.now() - this.birthday.getTime();
      //const ageDate = new Date(diff);
      //return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
  //Calculate Age
  Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }

  // Get full name
  Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
  const john = new Person('John', 'Doe', '8-12-90');
  const mary = new Person('Mary', 'Johnson', 'March 20 1978');
  console.log(mary);
  console.log(john.calculateAge());
  console.log(mary.getFullName());

  // What if Mary gets married and her last name changes?
  // Gets Married
  Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
  }
  mary.getsMarried('Smith');
  console.log(mary.getFullName());
  console.log(mary.hasOwnProperty('firstName'));
  console.log(mary.hasOwnProperty('getFullName'));
  // getFullName is in the prototype, that's why it is false
  
  // 47 Preototypal Inheritance
  function Persont(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Greeting
  Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  const person1 = new Person('John', 'Doe');
  console.log(person1.greeting());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person.prototype);

  // Make customer.prototype return Customer()
  Customer.prototype.constructor = Customer;

  // Create customer
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  console.log(customer1);
  console.log(customer1.greeting());

  Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}
    Welcome to our company`;
  }
  console.log(customer1.greeting());
// _______________________________________________________________//
  

  // 58 Using Object.Create

  // 1. Create a variable called personPrototypes
  
  const personPrototypes = {
    greeting: function(){
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
      this.lastName = newLastName;
    }
  }
  const mady = Object.create(personPrototypes);
  mady.firstName = 'Mady';
  mady.lastName = 'Williams';
  mady.age = 30;
  console.log(mady.greeting());

  mady.getsMarried('Thompson');
  console.log(mady.greeting());

  // Antoher way to create objects using object.create
  const bred = Object.create(personPrototypes, {
  firstName: {value:'Bred'},
  lastName: {value:'Traversy'},
  age: {value:36}
  });
  console.log(brad);
  console.log(brad.greeting());


// --------------------------- ES6 Classes -----------------------------
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.fistName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x,y) {
    return x + y;
  }
} 
const mary = new Person('Mary', 'Williams', '11-13-1980');
mary.getsMarried('Thompson');
console.log(mary.calculateAge());

//console.log(mary.addNumbers(1,2));
// Error mary.addNumbers is not a function because it is a static method.
// We have to use class names

console.log(Person.addNumbers(1,2));
*/
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.mebership = membership;
  }
  static getMembershipCost(){
    return 500
  }
}
const john = new Customer ('John', 'Doe', '555-555-5555', 'standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost())
  
  
