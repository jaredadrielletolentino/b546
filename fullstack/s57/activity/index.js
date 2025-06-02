console.log("Hello FullStack!");
// Universal Selector
let firstElement = document.querySelector('*');
// document refers to the whole webpage and querySelector is used to select a specific object (HTML element) from the document (webpage).

// The querySelector function takes a string input that is formatted like a CSS selector when applying styles. This allows us to get a specific element much like how CSS do it.
console.log(firstElement);

// querySelectorAll getting all elements
/*let secondElement = document.querySelectorAll('span');
console.log(secondElement);*/

let secondElement = document.getElementById('txt-first-name');
console.log(secondElement);

let thirdElement = document.getElementsByClassName('txt-inputs');
console.log(thirdElement);

let fourthElement = document.getElementsByTagName('input');
console.log(fourthElement);

const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

console.log(txtFirstName);
console.log(spanFullName);

/*txtFirstName.addEventListener('keyup', (event) => {
	console.log(txtFirstName.value);

	spanFullName.innerHTML = txtFirstName.value
})*/

/*let bodyElemet = document.querySelector("body");
console.log(bodyElemet.innerHTML);*/

/*

let functionName = (event) => {}
txtfirstName.AddEventListener('keyup', functionName(event));

*/
// Arrow function to update full name
const updateFullName = (event) => {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    spanFullName.innerHTML = `${firstName} ${lastName}`.trim();
}

txtFirstName.addEventListener('keyup', updateFullName);
txtLastName.addEventListener('keyup', updateFullName);
