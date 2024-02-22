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

const month = ['March', 'July', 'September', 'January'];
const adMonth = month.unshift('February');
console.log(adMonth);
console.log(month)

const countries = ['Kenya', 'Malaysia', 'Canada', 'Qatar', 'Nigeria', 'Morro', 'Southy'];
console.log(countries)

countries.splice(3, 2, 'Egypt', 'Ghana');
console.log(countries)

const wears = ['Gucci', 'Versace', 'D&G', 'Nike', 'LV'];
console.log(wears)



const drink = ['coke', 'viju', 'Gin', 'Exotic', 'Bobo']
console.log(drink)

drink.splice(2, 1)
console.log(drink)