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

const replaceEl = (cohorts[1] = 'Bash')

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

