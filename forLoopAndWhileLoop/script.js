// LOOP

// WHILE LOOP
let i = 0;

while (i < 10){
    console.log(10)
    i++
}

// FOR LOOP

// for ([initialization]; [ocndition]; [final-expression]; [statement])


for(let i = 0; i < 10; i++) {
    console.log(i)
}

for(let i = 1; i <= 8; i++) {
    console.log(i)
};

const colors = ['red', 'green', 'blue', 'yellow', 'black']
// console.log(colors)

for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}


// To declare the loop function

// ES5
for(let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i])
}

// ES6
for(const list of cohorts) {
    console.log(list)
};