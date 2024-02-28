const tagE1 = document.getElementsByTagName('h1');
console.log(tagE1);

const tagE2 = document.getElementsByClassName ('testing');
console.log(tagE2)

const tag3 = document.getElementById('box')
console.log(tag3)

const tag4 =  document.querySelectorAll('selectEl');

const oneEl = document.querySelector('.selectorOne');

const all = document.querySelector('#peleZainabu')

const btn = document.querySelector('button');


console.log(btn)

btn.addEventListener('mouseover', ()=>{
    alert('Hey boy, lets get something to eat')
})