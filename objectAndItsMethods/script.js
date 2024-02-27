// OBJECTS

// const firstName = "Soliu"
// const person = {
//     firstName,
//     surname: "Hayzed",
//     age: 158,
//     children: {
//         firstChild: "Eef",
//         secondChild: "Nafisah",

//     }
// }

// console.log(person)


// ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT

const human = {
    firstName: 'Abdullah',
    "DLT africa location": "Pegamut" 
}

human.pet = {name:"Cobra", age:3}
human.job = "Headmaster"
human.favFood = "Garri"

console.log(human)


console.log(human["DLT africa location"])
console.log(human['firstName'])
console.log(human.firstName)
console.log(human.pet.name)


// OBJECT BUILT IN METHOD

const pet = {
    petName: "Dog",
    petSound: () => {
        console.log("Woof! Woof!")
    }
}

pet.petSound()


const dog = {
    name: "Fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }
}

// console.log(dog.name, dog.age)
dog.listAllProperties()

const myObject = {
    myMethod1: () => {}, // Arrow function
    myMethod2: function(){}, // Function declaration
    myMethod3() {},         // Function expression
};

const animal = {
    name: "Fluffy Orange",
    age: 10,

    bark: () => {
        console.log("Woof Woof")
    }
}

console.log(animal.name)
animal.bark()

/************************ OBJECT METHOD ***************************************/

// OBJECT.keys()
// OBJECT.value()
// OBJECT.entries()
// OBJECT.freeze()
// OBJECT.seal()


// Object.keys ()
const employees = {
    boss: "Lateef",
    secretary: "Nusirat",
    sales: "Olamide",
    account: "Opeymei",
    cleaner: "Kolawole"
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo);


// Object.values()
const session = {
    firstPeriod: 0,
    secondPeriod: "Mathematics",
    break: 1.2,
    forthPeriod: "Coding",
}


const sessionValue = Object.values(session)
console.log(sessionValue);


// Object.values
const operatingSystem = {
    model: "Apple",
    type: "iPhone",
    version: 17,
}

const operatingSystemInfo = Object.entries(operatingSystem)
console.log(operatingSystemInfo)


// Object.freeze

const user = {
    username: "Hayzed_codes",
    password: 16061,
}

const userFreeze = Object.freeze(user);
console.log(userFreeze)

userFreeze.username = "soliu";
console.log(userFreeze)

// Object.seal
const user1 = {
    figurine: "Shrine",
    alcohol: "Store",
}

const user1Details = Object.seal(user1);
console.log(user1Details)

user1Details.figurine = "Fela",
user1Details.age = 40
console.log(user1Details);


let x

const person = {
    name: "AZ",
    age: 35,
    isAdmin: true,
    address: {
        street: "23 Unity and Peace Estate",
        city: "Ilorin",
        state: "Kwara"
    },

    hobbies: ["Music", "Sport"]

}
console.log(person);

// Accessing an array inside an object

x = person.hobbies[0]
let y = person["hobbies"][1]


console.log(x, y);

// Updating a property

person.name = "Hayzed"
console.log(person);

person.address.street = "Tanke Junction"
console.log(person);

// Delete
delete person.address.state
console.log(person);

delete person.address.city
console.log(person);

//  How to add a function to an object. Only function expression is permissible

person.why = function() {
    console.log(`Hello, my name is ${this.name}`)
} 
person.why()





