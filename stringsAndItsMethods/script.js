// Types of Strings 


// single quote ('')
// const words  =  'i am a boy'

// Double quote ("")
// const world  = " i am a boy"


// Back ticks (``)
// const worlds  = ` i am a boy`

// console.log(words, world, worlds)

const age = 12
const school = 'DLT'
const firstName = 'Eef'


const sentence = `my name is ${firstName}, i am ${age} years old and i go to ${school} school`

console.log(sentence)


const math = "2 + 2"

const mathematic = `${2 + 2}`

const lines = `1
2
3
4
5`

console.log(lines)

const numerals = `Hello, i'm Aliyu and i am from "Kogi state"`
console.log(numerals)

// Checking the length of a string

const name = "Hayzed"

console.log(name.length)

console.log(name[0])

// Changing the case of a string

const words = "i am a boy"

const word = "SHE IS A GIRL"

console.log(words.toUpperCase())
console.log(word.toLowerCase())

// Checking for Substring

const man = "I love coding and my favorite language is Javascript, Javascript"

const final = man.indexOf('Javascript')
const main = man.lastIndexOf('Javascript')


console.log(final)
console.log(main)

const check = man.includes('favorite')

const starting = man.startsWith('I')
const ending = man.endsWith('Javascript')

console.log(check)
console.log(starting)
console.log(ending)

// GETTING A SUBSTRING
//Slice Method

const exampleString = "Hotdog"
console.log(exampleString.slice(0, 3))
console.log(exampleString.slice(3))
console.log(exampleString.slice(-1))

// Split Method

const sentenceOne = 'The quick brown fox jumped over the lazy dog';
console.log(sentenceOne.split(' '));

const nameThree = 'Nofisat and Zainab'
const split11 = nameThree.split(' ')
console.log(split11);

// Reverse() and Join() Menthod
const nameTwo = 'Nofisat and Zainab'
const split1 = nameTwo.split(' ')
console.log(split1);

const reverse$ = split1.reverse()
console.log(reverse$);

const joinOne = reverse$.join(' ')
console.log(joinOne)

// Repeat() Method

const dogSays = "woof "
console.log(dogSays.repeat(6))

//Trim () Method
const trim = '  @example.com  '
console.log(trim.trim())