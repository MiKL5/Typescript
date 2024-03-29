// Type Assertion
// let txt:string;
// txt = "str"

// Assertion
// const form = document.querySelector('form')
// console.log(form.children);

// const form : HTMLFormElement = document.querySelector('form')!
// console.log(form.children);

// Type Casting
const form = document.querySelector('form') as HTMLFormElement
const form1 = document.querySelector('.form-container')
const form2 = document.querySelector('.form-container') as HTMLFormElement
console.log(form.children);
const input = document.querySelector('input') as HTMLInputElement


form.addEventListener('submit', handleSubmit)

function handleSubmit(event : Event){
    event.preventDefault()
    console.log("SUBMITTED");
}

window.addEventListener('click', handleClick)

function handleClick(event: MouseEvent) {
    console.log(event.clientX, event.clientY);
}

const paragraphsList = document.querySelectorAll('p'); //prend les p
console.log(paragraphsList);