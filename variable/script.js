// Variables. 

// let - this would allow you to change the variable value
// const - whatever you add to const would remain, it can not change unlike let which is why it is constant

let message = "Hello Eef!"
message = "Hello Zainab!"
message = "Hayzed!"
console.log(message);

const greeting = "Good morning my neighbor"
console.log(greeting);

const _name$ = "Al Fulaniy Ileya  🏠"
console.log(_name$);

console.log(message, greeting, _name$)

// 1. Create a variable, call it student name, call it student name and give it  any value that you like, mke sure the value can be reassigned in the future. Let's see your result on your console.
// 2. Create 3  variables, the naming must be a mixture of dollar sign, number and underscore respectively. console.log()

let studentName = "This is blue house"
studentName =  "this can be yellow house"
console.log(studentName);

const $var ="No worries"
const _var ="i'm fine"
const var3 ="Send funds"

console.log($var, _var, var3);

// JS datatypes
// Primitive and non-primitive
// Primitive datatype can only store one data while non-primitive stores a set of data
// Primitive data types: String - Number - Big Int - Boolean - Undefined - Null - Symbol - typeOf - NAN. 
// Non-Primitive data types: Objects - Array - Date

// String : Single string-(''), Double string-("") and Back ticks-(``)

const singleQoute = 'Who am i?';
const doubleQuote = "Who are you?";

console.log(singleQoute);
console.log(doubleQuote);

let name = "Team Lead"
const backTick = `Hello ${name} ${singleQoute}`;
console.log(backTick)

let newName = 'Toheeb';
let favoriteDrink = 'Bobo';

const details = `My name is ${newName}, and my favorite drink is ${favoriteDrink}`;
console.log(details);

const numberOne = 45
const numberTwo = 10

const add = numberOne + numberTwo
console.log(add)
const sub =  numberOne - numberTwo
console.log(sub)
const div = numberOne / numberTwo
console.log(div)
const mul = `${numberOne * numberTwo}`;
console.log(mul);



// concatenation is a method used to join 2 strings together
// Boolean - True / False

const isBeautiful = true;
// console.log(typeof isBeautiful)

if (!isBeautiful) {
    console.log("This woman is beautiful")
} else {
    console.log("This woman is ugly")
}

// null

let age =null;
console.log(age);


// Undefined

let x;
console.log(x);

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);