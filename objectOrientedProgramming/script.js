// With a function expression, calculate the area of a rectangle


const calculateRectangleArea = function(length, width) {
    return length * width;
};

const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log("The area of the rectangle is: " + area);

// OOP ---> OBJECT ORIENTED PROGRAMMING.

// Object Literal
let person = {
    first_name: "Salman",
    last_name: "Kofoshi",

    getFunction : function() { // Method ---> a property whose value is a function
        return `My name is ${person.first_name} ${person.last_name}`
    },

    phoneNumber : {
        mobile: "12345",
        landline: "6789"
    }

}

console.log(person.getFunction())
console.log(person.phoneNumber.mobile)


// Object constructor

function PersonTwo(first_name, last_name) {
    this.first_name = first_name,
    this.last_name = last_name

}

let person1 = new PersonTwo("Hayzed", "Mabululu");
let person2 = new PersonTwo("Zainab", "Muritala");
console.log(person1)
console.log(person2)


// NEW Keyword
const student = {} // Simple object

const studentTwo = new Object();
studentTwo.firstName = "Oloye Pupo"
console.log(studentTwo)

const arr = [1, 2, 3];
const newArr = new Array(1, 2, 3)

console.log(arr, newArr)

// DATE
const myBaiday = new Date("JUly 17, 2005");
console.log(myBaiday)

const myNumber = new Number(100.00);
console.log(myNumber.toFixed(0))

// THIS keyword
function Sentence(words) {
    this.words = words;
    console.log(this)
}

const $_ = new Sentence(`Hello there! We're learning about this keyword`);

function Car (color, brand, wheels, id) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    this.id = id;


    console.log(this)
}

const blueCar = new Car("Blue", "BMW", 4, "🚘");
const redCar = new Car("Red", "Benz", 4, "🚗");

//  CLASSWORK
// Create a cohort function with params (name, age, favFood, phoneNo, baiday), create new instances for three different cohorts, log the param argument unto the console ---> baiday should be a new date instance

function Cohort(name, age, favFood, phoneNo, baiday) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.baiday = baiday;

    console.log(this)
}

const cohort1 = new Cohort("Hayzed", 12, "Bread and Beans", +2347013332064, new Date("August 11, 1990"));
const cohort2 = new Cohort("Soliu", 14, "Spaghetti", +2347013372891,new Date ("January 9, 1988"));
const cohort3 = new Cohort("Oloye", 22, "Foodstuffs", +234907624064, new Date("July 1, 2000"));

// Class Declaration
class Shape1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}

const area_ = new Shape1(10, 2)

//  Class expression
// i --> Anonymous

const Shape = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}
const area1= new Shape1(10, 2)

// ii --> unanonymous

const BigBoy = class BIgie {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }   
    // getter function
    get him () {
        return this.coder();
    }

    // method
    coder (){
        return {name: this.name, age: this.age}
    }

}

const instance = new BigBoy('Paiko', 40);
console.log(instance.him)

const School = class Academy {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    get principal () {
        return this.headBoy()
    }

    headBoy() {
        return {name: this.name, location: this.location}
    }
}

const headMaster = new School ("Hayzed", "PEGAMUT");
console.log(headMaster.principal)


// CLASS-WORK

// with an unanonymous class function named RectShape, create a constructor with params of length and breath, get the area of a rectangle using getter function and calculate method, create a new instance for the RectShape with its relative argument... answer to the console

const RectShape = class Rectangle {
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    get areaRect (){
        return this.calculate()
    }

    calculate (){
        return {Area: this.length * this.breadth}
        // return  this.length * this.breadth
    }

}
const instances = new RectShape (10, 5);

console.log(instances.areaRect);

// Difference between const and class
// const detailOne = {
//     name: "Class Captain",
//     age: 540,
//     isBlack: false
// }

// const detailTwo = {
//     name: "Baba Oloye",
//     age: 640,
//     isBlack: true
// }

// const getDetailOne = new detailOne()
// console.log(getDetailOne)


class Detail {
    constructor (name, age, isPretty){
        this.name = name;
        this.age = age;
        this.isPretty = isPretty;
    }

    
}

const detailOne = new Detail("Bash", 12, false);
const detailTwo = new Detail("Nafi", 10, false);
const detailThree = new Detail("Bode", 2, true);

const array = [detailOne, detailTwo]
array.push(detailThree)
array.shift(detailOne)
console.log(array)

const createPerson = (name, age, isHands) => {
    // const userSchema = {
    //     name, age, isHands
    // }

    // return userSchema

    return {name, age, isHands}
}

const personCreated = createPerson("Bode", 45,true)
console.log(personCreated)
const personCreated2 = createPerson("Soliu", 450,true)
console.log(personCreated2)

// INHERITANCE
class Animal {
    alive = true;

    isBeautiful = 'This animal is beautiful';

    eat (){
        console.log(`This ${this.name} can eat`)
    }

    sleep (){
        console.log(`This ${this.name} can sleep`)
    }
}

class Rabbit extends Animal {
    name = "Rabbit"

    run(){
        console.log(`This ${this.name} can run`)
    }
}

class Goat extends Animal {
    name = "Goat"
}


const rabbit = new Rabbit()
rabbit.run()
console.log(rabbit)

const goat = new Goat()
goat.eat()
console.log(goat.isBeautiful)

class Dog extends Animal {
    name = "Dog"
}

const dog = new Dog()
dog.sleep()
console.log(dog)











