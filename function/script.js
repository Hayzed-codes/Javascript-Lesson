
// FUNCTION DECLARATION

function square(number){ //params is passed in the parenthesis
    //statement
}
square() //Function call/ invocation 

//Function Expression

const nameFunction = function(params) {}

//Arrow Declaration
const arrowFn = () => {}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("Hayzed")
sayHello("Class captain 👮‍♂️")
sayHello("Nafisah")

const isHungry = function (food) {
    console.log (`He wants to eat ${food}`);
}

isHungry('Bread and beans')

const money = (dollars) => {
    console.log(`He makes ${dollars}`);
}

money('$10,000 monthly')

const division = (number) => {
    return number / number;
}

const answer = division(8)
console.log(answer)


const square2 = number => {return number * number}
const result = square2(5)
console.log(result)

const square3 = number => number * number
const resUlt = square3(3)
console.log(resUlt)

//const notAccepted = name , age => {}

function add(number) {
    return number + number;
}

const sum = add(2);
console.log(sum)

//declare an arrow functions with 2 parameters, return the parameter and give them argument

const minus = (number, age) => {
    return number - age;
}

const results = minus(10, 3);
console.log(results )

// Nested Function

function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = 'DLT Africa'

    function add() {
        return `${name} is ${num1 + num2} years old` 
    }
    return add();

}

console.log(getScore())


function getScore(num1, num2, name) {

    function add() {
        return `${name} is ${num1 + num2} years old` 
    }

    return add();

}

console.log(getScore(2, 3, 'DLT Africa'))

const nestedFunction = (a, b, c) => {
    
    const anotherFunction = () => {
        return`${a + b + c} `
    }

    return anotherFunction()
}

console.log(nestedFunction(2,4,6))



// Declare a function  with 2 parameters, check if the addition of the 2 parameters is >= to 10, it should return a statement showing "Sum is greater than or equals to 10" if not, it should return param1 + param2

function addNumbers(a, b) {
    return a + b >= 10 ? "Sum is greater or equals to 10" : a + b;
}
const greater = addNumbers(9, 10);
console.log(greater)

const lesser = addNumbers(2, 4);
console.log(lesser)

// Check for even numbers
const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false
}

const even = isEven(6);
console.log(even)

const odd = isEven(7);
console.log(odd)

// Check for prime number
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
        
    }
    return true;
}

const prime = isPrime(3)
console.log(prime)