// const cohorts = [
//   "Soliu",
//   "Zainab",
//   "Azeez",
//   "Nafisat",
//   "Sir Kenny",
//   "Oloye Pupo",
//   "Abdul-Lateef",
//   "Mr Tunmise",
  
// ];
// console.log(cohorts);

// const replaceEl = (cohorts[1]= 'Bash', cohorts[5] = 'babe')

// cohorts[8] = 'tolu'

// // ES5
// for(let i = 0; i < cohorts.length; i++) {
//     console.log(i, cohorts[i])
// }

// // ES6
// for(const list of cohorts) {
//     console.log(list)
// };

// const nested = [[1,2], [3,4], [5,6]]
// const newArr = nested[0][1]
// console.log(newArr);

// const objectt = {
//     name : 'John',
//     age : 44,
// }

// console.log(objectt)

// const arr = [
//     'Banana',
//     10000,
//     {
//         name : 'bala blu',
//         age : 80
//     },

//     function name (){
//         alert('DEAD MEAT 🔪')
//     }

// ]
// console.log(typeof arr);

/************************ ARRAY METHOD ***************************************/

// // PUSH ()

// const student = ['Yemi', 'Sola', 'Grace', 'Maryam', 'Femi', 'Bola'];
//     student.push('Babe', 'food, bread, beans');
//     console.log(student)
    

// // POP ()

// const numbers = [3,4,5,6,7];
// numbers.pop();
// console.log(numbers)

// // SHIFT ()

// const colors = ['Violet', 'Red', 'Blue', 'Black'];
// const rmFirst = colors.shift();
// console.log(rmFirst);
// console.log(colors)

// // UNSHIFT()
// const month = ['March', 'July', 'September', 'January'];
// const adMonth = month.unshift('February');
// console.log(adMonth);
// console.log(month)

// const countries = ['Kenya', 'Malaysia', 'Canada', 'Qatar', 'Nigeria', 'Morro', 'Southy'];
// console.log(countries)

// // SPLICE()
// countries.splice(3, 2, 'Egypt', 'Ghana');
// console.log(countries)

// const wears = ['Gucci', 'Versace', 'D&G', 'Nike', 'LV'];
// console.log(wears)

// wears.splice(2)
// console.log(wears)

// const drink = ['coke', 'viju', 'Gin', 'Exotic', 'Bobo']
// console.log(drink)

// drink.splice(2, 1)
// console.log(drink)

// //  SLICE ()

// const men = ['Tunmise', 'Kenny', 'Soliu', 'Bode', 'Abee', 'Hayzed'];
// console.log(men)

// const baddestMen = men.slice(2)
// console.log(baddestMen)

// const newString = 'Nafeesah'
// console.log(newString.length);
// const newSlice = newString.slice(2, 7);
// console.log(newSlice)

// const name = 'Azeez'
// console.log(name)

// const midName = name.slice(1, 4)
// console.log(midName)

// const coolestAmong = men.slice(5)
// console.log(coolestAmong)

// // toString() 

// const menString = men.toString();
// console.log(menString)

// // .include()

// const include = men.includes('Seyi');
// console.log(include)

// // sort()

// men.sort();
// console.log(men);

// const alpha = ['G', 'F', 'K', 'L', 'A', 'P'];
// console.log(alpha)

// alpha.sort();
// console.log(alpha)

// const num = [5, 8, 0, 5, 7, 2, 1, 9];
// console.log(num)

// num.sort();
// console.log(num)

// // CALL BACK FUNCTION () => {}

// const desNum = [5, 8, 0, 5, 7, 2, 1, 12, 77, 37, 94, 64, 20, 33, 67, 9];
// console.log(desNum)

// desNum.sort((a, b) => a -b);
// desNum.sort((a, b) => b -a);
// console.log(desNum)

/************************ INDEXOF ***************************************/


// const $number = [2, 1, 7, 4, 3, 6, 2, 9, 8, 7, 5, 3, 4, 8];
// console.log($number );

// const index1 = $number.indexOf(7, 1);
// console.log(index1)

// const tutor = [ 'Abdullah', 'Naheem', 'Anate', 'Seyi', 'Soliu', 'Abdullah'];
// console.log(tutor);

// const indexTt = tutor.indexOf('Abdullah');
// console.log(indexTt)

// const lastIndex = $number.lastIndexOf(2);
// console.log(lastIndex)

// const lastTutor = tutor.lastIndexOf('Abdullah');
// console.log(lastTutor)

// // LOOP ()

// const _names = ['Zainab', 'Bashirat', 'Nafeesah'];

// // ES5 STYLE
// for(let i = 0; i < _names.length; i++) {
//     console.log(i, _names[i])
// };

// // ES6 STYLE
// for(const _name of _names){
//     console.log(_name);
// }

// // FOR EACH()

// _names.forEach(function() {});

// _names.forEach((value, i, arr) => {
//     console.log(value.toUpperCase());
//     // console.log(i);
//     // console.log(arr);

// });


// // Example 1
// let _$numbers = [2, 3, 9, 8, 7, 9];

// _$numbers.sort();

// _$numbers.forEach(function(number, i) {
//     console.log(number, i);
// }) ;

// // Example 2

// let mammals = ['Goat', 'Man', 'Baboon', 'Dog'];

// console.log(mammals.sort());

// mammals.forEach((mammal, i)=> console.log(mammal.toUpperCase(), i));

// // Example 3
// let totalVal = 0
// const trans = [42, 45, 26, 4, 13, 16];

// trans.forEach((tran)=> {
//     console.log(totalVal, (totalVal += tran), tran);
// });

// console.log(totalVal);

// // Example 4

// _names.forEach((cong)=> console.log(`Congratulations! ${cong} unah dey smoke indian hemp`))


/************************ MAP METHOD() ***************************************/


// const inventory = [
//     {name: "Rice", price: 4000},
//     {name: "Beans", price: 4000},
//     {name: "Garri", price: 4000},
//     {name: "Yam", price: 4000},
//     {name: "Amala", price: 4000},
// ];

// const invent = inventory.map((value)=>{
//     return value.price
// } )

// console.log(invent);

// const food = inventory.map((comms)=> comms.name )

// console.log(food);

// // CLASS EXERCISE

// const numu = [1, 3, 5, 8];

// const res = numu.map((x)=> x * 2)
// console.log(res);

// // OR

// let double = [2, 5, 7, 4];
// let $double = double.map((mult) => {
//     return mult * 2

// });
// console.log($double)


/************************ ARRAY FILTER() ***************************************/


const numbers = [-10, 0, 12, -2, 4, -9, 5, -8];

const filteredNumbers = numbers.filter((number)  =>{
    return number < 0
})

console.log(filteredNumbers)

const filteredNumbers1 = []
for(i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        filteredNumbers1.push(numbers[i])
    }
}

console.log(filteredNumbers1)


const employees = [
    {name: "Mohammad", overtime: 10},
    {name: "Adigun", overtime: 5},
    {name: "Olobayo", overtime: 4},
    {name: "Gozman", overtime: 7},
    {name: "Amara", overtime: 9},
    {name: "Fareedah", overtime: 12},
]

const employeesToReward = employees.filter((employee) => {
    if (employee.overtime >= 7){
        return true;
    }
 
})
console.log(employeesToReward)

const employeesTo = employees.filter((employee) => {

        return employee.overtime >= 7
 
})
console.log(employeesTo)

const employeesToRewardNames = employeesToReward.map((employee) => {
    return employee.name
})

console.log(employeesToRewardNames)

employeesToRewardNames.forEach ((congrats) => {
    console.log(`Hi, congratulations! ${congrats} You have received an award`)
})

for (let i = 0; i < employeesToRewardNames.length; i++) {
    console.log(`${employeesToRewardNames[i]}, you have recieved an award`);
}


const creatures = [
    {animal: "Shark", habitat: "Ocean"},
    {animal: "Whale", habitat: "Ocean"},
    {animal: "Hippopotamus", habitat: "Lake"},
    {animal: "Lion", habitat: "Savannah"},
    {animal: "Monkey", habitat: "Jungle"},
]

const aquaticAnimals = creatures.filter((creature) => {

    return creature.habitat === "Ocean" || creature.habitat === "Lake"

})
console.log(aquaticAnimals)

// ARRAY FIND

const digits = [1,2,3,4,5,6,7,8,9]

const value = digits.find((digits) => {
    return digits > 4
})

console.log(value)


const states = [
    'Ogun State',
    'Kogi State',
    'Anambra State',
    'Lagos State',
    'Benue State',
]

const state = states.find((state) => {
    return state.includes ('m')
})

console.log(state)


// CLASS WORK

// A student assessment took place, with a total mark of 10, Give us 7 students and mark them over 10, now give a reward to each students with a mark over the mark of 6

const students = [
    {name: 'Nafisat', score: 7},
    {name: 'Hayzed', score: 8},
    {name: 'Zainab', score: 4},
    {name: 'Soliu', score: 9},
    {name: 'Eef', score: 6},
    {name: 'Kenny', score: 3},
    {name: 'Oloye', score: 7},
]

const studAssess = students.filter((student) => {
    if (student.score > 6) {
        return true;
    }
  
})

console.log(studAssess)

const studAssessName = studAssess.map((student) => {
    return student.name
})
console.log(studAssessName)

studAssessName.forEach ((reward) => {
    console.log(`Congratulations! ${reward}, You have just been awarded a scholarship.`)
})


/************************ ARRAY SOME AND EVERY ***************************************/

const box =  [1,2,3,4,5,6,7]

// SOME
console.log(box.some((el) => {return el < 8}))

// EVERY
console.log(box.every((el) => {return el < 4}))

// ARRAY REDUCE

const boxes = [1,2,3,4,5,6,7,8,9,10]

const answer = boxes.reduce((accumulator, value) => {
    return accumulator + value
}, 0)

console.log(answer)

