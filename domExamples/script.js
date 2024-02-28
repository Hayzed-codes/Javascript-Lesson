const anyThing = document.querySelectorAll('.menuItem')
const oneEl = document.querySelector('.active')
const newClass = document.createElement('h2')
const body1 = document.querySelector('body')

const menuClicked = () => {
    for (let i  = 0; i < anyThing.length; i++) {
        anyThing[i].classList.remove('active')
    }

    event.target.classList.add('active')
}

body1.appendChild(newClass);
newClass.innerHTML = "We can be going home"


