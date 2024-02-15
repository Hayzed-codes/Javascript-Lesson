// IF statement
// const age = 18

// const bianca =12

// if (bianca > age){
    
//     console.log("You have been granted Admission")
// }else if(bianca === age){
//     console.log("your admission has been postponed till next year")
// }else{
//     console.log("wait till you are above 18")
// }

// TRUTHY AND FALSY VALUES

// Falsy values 
// False
// "" 
// 0
// null
// undefined
// NaN

// if (undefined){
//     console.log('truth value')
// }else{
//     console.log('falsy value')
// }

// const password = "rapp"
// const email = "anate@gmail.com"

// if (password && email){
//     console.log("Login Approved")
// }else if(password || email){
//     console.log("password and email must be provided")
// }else{
//     console.log("unapproved!!!")
// }

// create a good morning message if the time is less than 10:00am.
// if not, but the time is less than 20;00, create a good day message, otherwise good evening.

// let time = 10


// if (time < 10){
//     console.log("Good morning")
// }else if(time < 20){
//     console.log("Good day")
// }else{
//     console.log("Good evening")
// }

// time = 9
// if (time < 10){
//     console.log("Good morning")
// }else if(time < 20){
//     console.log("Good day")
// }else{
//     console.log("Good evening")
// }

// time = 20
// if (time < 10){
//     console.log("Good morning")
// }else if(time < 20){
//     console.log("Good day")
// }else{
//     console.log("Good evening")
// }

// const times = "good morning"

// if (!times){
//     console.log("good afternoon")
// }else{
//     console.log(times)
// }

let temperature = 25

if(temperature > 30){
    console.log("it is a hot day!")
}else{
    console.log("it is not too hot today.")
}

let hour = new Date().getHours();

// if (hour < 12){
//     console.log("Good morning");
// }else if(hour >= 12 && hour < 18) {
//     console.log("Good afternoon");
// }else {
//     console.log("Good evening");
// }

hour < 12 ? console.log("good morning") : hour >= 12 && hour < 18 ? console.log("good afternoon") : console.log("good evening");

let school = new Date().getHours();

if (school < 10) {
    console.log("first period")
} else if(school >= 10 && school < 12){
    console.log("second period")
}else if (school >= 12 && school < 13){
    console.log("break time")
}else if(school >= 13 && school < 15) {
    console.log("last period")
}else{
    console.log("dey go your papa house")
}

let score = 85;

if (score >= 90) {
    console.log("Excellent! you score an A.")
}else if (score >= 80) {
    console.log("Well done! you score a B.")
}else if (score >= 70) {
    console.log("Good job! you score a C.")
}else if (score >= 60) {
    console.log("You pass! you score a D.")
}else {
    console.log("Sorry you failed, you scored an F.")
}
// let userInput = prompt("Pls enter ur age")

// SWITCH STATEMENT

let superHero = "Captain America"

switch (superHero) {
    case 'iron Man':
        console.log("i am irom man..")
        break;
        case 'Thor':
            console.log("that is my hammer!")
        break
        case 'Captain America':
            console.log("Never give up!")
        break;
        case 'Black Widow':
            console.log("One shot, one kill!")
        break;
        default:
            console.log("Enter a valid superHero Name")
}
console.log(superHero);


let day = new Date().getDay();
console.log(day)
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday"
        break;
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;

        default:
        dayName = "Unknown"
    
}

console.log("Today is " + dayName);

// create a switch statement to describe any four types of fruits

let fruits = "Apple"
let message

switch (fruits) {
    case 'pawpaw':
        message = "This is a pawpaw"
        break;
    case 'Mango':
        message = "This is a Mango"
        break;
    case 'Apple':
        message = "This is an Apple"
        break;
    case 'Pineapple':
        message = "This is a Pineapple"
        break;
    default:   
        message = "unknown"
        break;
}

console.log(message)

// TERNARY OPERATOR

const oldMan = 80

if(oldMan >= 80) {
    console.log("you can drive")
}else {
    console.log("you may not drive")
}

oldMan >= 80 ? console.log("u can drive") : console.log("u may not drive");


const mage = 45;
(mage > 30) ? (mage > 70) ?
    console.log("You are getting old") :
    console.log("You are between 30 and 69") :
    console.log("You are below 30");


let age = 20

canVote = age === 18 ? "YES you can vote!" : age < 18 ? "NO you can't vote" : "Yes it is possible"
console.log(canVote)

