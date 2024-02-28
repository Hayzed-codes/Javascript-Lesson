console.log("Hello world")


const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Onimisi"
console.log(person);
console.log(otherPerson);


console.log(person === otherPerson);


//  SHALLOW CLONING
// Spread operator {...}

// const numbers = [1, 3, 5, 7, 4, 6];

// console.log(...numbers);

// const newNumber = [...numbers];
// console.log(newNumber);

const numbers = [1, 3, 5, 7, 4, 6];

const copiedNumber  = numbers;
const newNumber = [...numbers];

console.log(copiedNumber);


console.log(copiedNumber === numbers)
console.log(newNumber === numbers)

numbers.push(8,2);
console.log(numbers);
copiedNumber.push(8,2);
console.log(copiedNumber);
newNumber.push(8,2);
console.log(newNumber);
const slice = numbers.slice(1, 5);
console.log(slice);

// Object Cloning

// Example 1
const personDetails = {
    name: "Zainab",
    age: 19,
}


const changeDetails = {...personDetails};
changeDetails.age = 60
console.log(personDetails);
console.log(changeDetails);


// const originalObj = {
//     name: "Folorunsho",
//     age:  33,
//     address: {
//         city: "Pegamut",
//         state: "Ogun"
//     }
// }

// const cloneObj = Object.assign({}, originalObj);
// // const cloneObj = {...originalObj};


// cloneObj.name = "Naphy";
// cloneObj.address.city = "Elejigbo"

// console.log(originalObj);
// console.log(cloneObj);

//  Spreading operator
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11, 12];

const merge = [...arr1, ...arr2, ...arr3];
console.log(merge);

const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

const cloneMerge = {...text, data:[...numbs]};

cloneMerge.name = "Hayzed";
cloneMerge.data.push(5);

console.log(text);
console.log(numbs);
console.log(cloneMerge);


// DEEP CLONING

// const details = {
//     firstName: "Kenny",
//     car: {
//         brand: "Range Rover",
//         wheels: 4,
//         color: "blue"
//     }
// };

// const newDetails = {...details};
// newDetails.firstName = "Taiwo"
// newDetails.car.color = "green"


// console.log(details);
// console.log(newDetails);


const details = {
    firstName: "Kenny",
    car: {
        brand: "Range Rover",
        wheels: 4,
        color: "blue"
    }
};

const stringifyDetails = JSON.stringify(details)
console.log(stringifyDetails)

const newDetails = JSON.parse(stringifyDetails);
console.log(newDetails);

newDetails.firstName = "Susu"
newDetails.car.color = "Crimson"
console.log(details.car.color);
console.log(newDetails.car.color);


const originalObj1 = {
    name: "Zainab",
    age: 12,
    address: {
        locality: "Agege wa",
        area: "Babayemi",

    }
}

const clonedObject = JSON.parse(JSON.stringify(originalObj1));

clonedObject.name = "Soliu";
clonedObject.age = 33;
clonedObject.address.locality = "Pegamut";
clonedObject.address.area = "Mujayidun"

console.log(originalObj1);
console.log(clonedObject);













