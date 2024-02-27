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
    listAllProperties:function(){
        console.log(this.name, this.age)
    }
}

dog.listAllProperties()