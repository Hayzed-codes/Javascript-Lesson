const name = "Zainab"
const age = 17
const school = "Agege Primary School, Orile"

console.log(`${name} is ${age} y/o when she finished from ${school}`)
const one = () => {
    return `${name} of ${age} years attended ${school}`;
}

const answers = one()
console.log(answers)

const file = () => {
    return `${name} likes eating ${age} wraps of Semo in ${school}`
}

const sentence = file ()
console.log(sentence)

// // Local scope
const localScope = () => {
    const name = "Oloye Pupo";
    const religion = "Muslim"
    const activity = "Drinking of wine"

    return `${name} who is a ${religion} enjoys ${activity}`
}

const oloye = localScope()
console.log(oloye)

// Block scope
const religion = "christian"

const exampleThree = () => {
    const name = "Chima"
    if(true){
        // block scope
        const schoolName = "LASU"

        console.log(`${name} is a ${religion} and goes to ${schoolName}`)
    }
}


exampleThree()

// Hoisting

const a = 2 // something here is similar to function expression and arrow function but it's not similar to function declaration
const b = 3

const result = exampleFive()
console.log(result)

function exampleFive(){
    return 2 + 2
}


// const exampleFive = () => {
//     return 2 + 2
// }

const me = function (){}

// const m = 2

// console.log(g)
// var g

// g = 4

// console.log(g)

//let here

//here = 5

// console.log(here)


// CLOSURE // The scope regarding a function inside a function

const outerFunctions = () => {
    const ben = 5

    const innerFunction = () => {
        const man = 7

        return ben + man
    }


    const final = innerFunction()
    
    console.log(final * 2)
    
}

outerFunctions()


const outerFunction = () => {
    const ben = 5

    const innerFunction = () => {
        const man = 7

        return ben + man
    }


    return innerFunction ()
    
    
}



const answer = outerFunction()

console.log(answer)

// A function that carries a function with the condition that if true, return a certain number then return the final answer of the condition * 4

// And in the main function, the final answer of the previous function should be divided by 2. ANSWER SHOULD BE IN CONSOLE

const mainFunction = () => {
    const a = 12;
    const b = 2;

    const subFunction = () => {
        const c = 4

        if (a) {
            return a * c
        }
        
    }
    return subFunction() / b
    
}
const anser = mainFunction()
console.log(anser)

const firstFunc = () => {
    const div = 2

    
    const secondFunc = () => {
  
        let certainNumber
        const mult = 4

        if(true) {
            certainNumber = 5 

        }
        
        const ans = certainNumber * mult
        return ans
    }

    const initialAnswer = secondFunc()

    const  finalAnswer = initialAnswer / div

    console.log(finalAnswer)

    
}

firstFunc()
