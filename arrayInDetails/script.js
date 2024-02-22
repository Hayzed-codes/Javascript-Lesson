const cohorts = [
  "Soliu",
  "Zainab",
  "Azeez",
  "Nafisat",
  "Sir Kenny",
  "Oloye Pupo",
  "Abdul-Lateef",
  "Mr Tunmise",
  
];
console.log(cohorts);

const replaceEl = (cohorts[1]= 'Bash', cohorts[5] = 'babe')

cohorts[8] = 'tolu'

// ES5
for(let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i])
}

// ES6
for(const list of cohorts) {
    console.log(list)
};

const nested = [[1,2], [3,4], [5,6]]
const newArr = nested[0][1]
console.log(newArr);

const objectt = {
    name : 'John',
    age : 44,
}

console.log(objectt)

const arr = [
    'Banana',
    10000,
    {
        name : 'bala blu',
        age : 80
    },

    function name (){
        alert('DEAD MEAT 🔪')
    }

]
console.log(typeof arr);

// ARRAY METHOD

// PUSH ()

const student = ['Yemi', 'Sola', 'Grace', 'Maryam', 'Femi', 'Bola'];
    student.push('Babe', 'food, bread, beans');
    console.log(student)
    

// POP ()

const numbers = [3,4,5,6,7];
numbers.pop();
console.log(numbers)

// SHIFT ()

const colors = ['Violet', 'Red', 'Blue', 'Black'];
const rmFirst = colors.shift();
console.log(rmFirst);
console.log(colors)

// UNSHIFT()
const month = ['March', 'July', 'September', 'January'];
const adMonth = month.unshift('February');
console.log(adMonth);
console.log(month)

const countries = ['Kenya', 'Malaysia', 'Canada', 'Qatar', 'Nigeria', 'Morro', 'Southy'];
console.log(countries)

// SPLICE()
countries.splice(3, 2, 'Egypt', 'Ghana');
console.log(countries)

const wears = ['Gucci', 'Versace', 'D&G', 'Nike', 'LV'];
console.log(wears)

wears.splice(2)
console.log(wears)

const drink = ['coke', 'viju', 'Gin', 'Exotic', 'Bobo']
console.log(drink)

drink.splice(2, 1)
console.log(drink)

//  SLICE ()

const men = ['Tunmise', 'Kenny', 'Soliu', 'Bode', 'Abee', 'Hayzed'];
console.log(men)

const baddestMen = men.slice(2)
console.log(baddestMen)

const newString = 'Nafeesah'
console.log(newString.length);
const newSlice = newString.slice(2, 7);
console.log(newSlice)

const name = 'Azeez'
console.log(name)

const midName = name.slice(1, 4)
console.log(midName)

const coolestAmong = men.slice(5)
console.log(coolestAmong)

// toString() 

const menString = men.toString();
console.log(menString)

// .include()

const include = men.includes('Seyi');
console.log(include)

// sort()

men.sort();
console.log(men);

const alpha = ['G', 'F', 'K', 'L', 'A', 'P'];
console.log(alpha)

alpha.sort();
console.log(alpha)

const num = [5, 8, 0, 5, 7, 2, 1, 9];
console.log(num)

num.sort();
console.log(num)

// CALL BACK FUNCTION () => {}

const desNum = [5, 8, 0, 5, 7, 2, 1, 12, 77, 37, 94, 64, 20, 33, 67, 9];
console.log(desNum)

desNum.sort((a, b) => a -b);
desNum.sort((a, b) => b -a);
console.log(desNum)

// indexOf()

const $number = [2, 1, 7, 4, 3, 6, 2, 9, 8, 7, 5, 3, 4, 8];
console.log($number );

const index1 = $number.indexOf(7, 1);
console.log(index1)

const tutor = [ 'Abdullah', 'Naheem', 'Anate', 'Seyi', 'Soliu', 'Abdullah'];
console.log(tutor);

const indexTt = tutor.indexOf('Abdullah');
console.log(indexTt)

const lastIndex = $number.lastIndexOf(2);
console.log(lastIndex)

const lastTutor = tutor.lastIndexOf('Abdullah');
console.log(lastTutor)

// LOOP ()

const _names = ['Zainab', 'Bashirat', 'Nafeesah'];

// ES5 STYLE
for(let i = 0; i < _names.length; i++) {
    console.log(i, _names[i])
};

// ES6 STYLE
for(const _name of _names){
    console.log(_name);
}

// FOR EACH()

_names.forEach(function() {});

_names.forEach((value, i, arr) => {
    console.log(value.toUpperCase());
    // console.log(i);
    // console.log(arr);

});


// Example 1
let _$numbers = [2, 3, 9, 8, 7, 9];

_$numbers.sort();

_$numbers.forEach(function(number, i) {
    console.log(number, i);
}) ;

// Example 2

let mammals = ['Goat', 'Man', 'Baboon', 'Dog'];

console.log(mammals.sort());

mammals.forEach((mammal, i)=> console.log(mammal.toUpperCase(), i));

// Example 3
let totalVal = 0
const trans = [42, 45, 26, 4, 13, 16];

trans.forEach((tran)=> {
    console.log(totalVal, (totalVal += tran), tran);
});

console.log(totalVal);

// Example 4

_names.forEach((cong)=> console.log(`Congratulations! ${cong} unah dey smoke indian hemp`))

// MAP Method ()



const inventory = [
    {name: "Rice", price: 4000},
    {name: "Beans", price: 4000},
    {name: "Garri", price: 4000},
    {name: "Yam", price: 4000},
    {name: "Amala", price: 4000},
];

const invent = inventory.map((value)=>{
    return value.price
} )

console.log(invent);

const food = inventory.map((comms)=> comms.name )

console.log(food);

const numu = [1, 3, 5, 8];

const res = numu.map((x)=> x * 2)
console.log(res);