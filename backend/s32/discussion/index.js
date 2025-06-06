// console.log("Hello World!");

// [SECTION] Exponent Operator:
	// Syntax:
		// baseNumber ** exponent

const firstNum = 8 ** 2;
console.log("Result from Exponent Operator:");
console.log(firstNum);

	// Syntax:
		// Math.pow(baseNumber, exponent);

let secondNum = Math.pow(8, 3);
console.log("Result using Math.pow():");
console.log(secondNum);

// [SECTION] Template Literals
	// Allows to write strings without using concatenation (+)
	// Greatly helps with code readability;
		// Syntax:
			// `String`;

let name = "John";

// Pre-template Literals:
let message = 'Hello ' + name + "! Welcome to Programming!";
console.log(message);

// Strings using template literal:

let anotherMessage = `Hello ${name}! Welcome to Programming!`;
console.log(anotherMessage);

// Multi-line string using Template Literals:
let thirdMessage = `${name} attended a math competition.
	He won it by solving the problem 8 ** 3 with the solution of ${firstNum}`;
console.log(thirdMessage);

// Template Literals allows us to write strings with embedded JavaScript expression.
const interestRate = .1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// [SECTION] Array Destructure
	// Allows us to unpack elements in arrays into distinct variables.
	// Allows us to name array elements with variable instead of using index  number.
	// Syntax:
		// let/const [variableName0, variableName1, variableName2, . . .] = arrayName;

const fullName = ["Juan", "Dela", "Cruz"];

console.log("fullName array before Array Destructuring:");
console.log(fullName);

// Array Destructuring:
const [firstName, middleName, lastName] = fullName;

console.log("After Array Destructuring:");
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(fullName);

// [SECTION] Arrow Function
	// Compact alternative syntax to a traditional functions
	// This is useful for code snippets where creating functions will not be reused in any other portion of the code.
	// Syntax:
		// (parameter/s) => {code/logic};
		// () => {code/logic()};

let hello = (name, age) => {
	console.log(`Hello ${name}! Your age is ${age}!`);
}

hello("John", 18);

// Implicit Return (it should not be in Template Literals)
// It should be a one liner code
let add = (x,y) => x + y;


// [SECTION] Function Expression
	// We use the function keyword and specify a name for the function declaration.

		// Syntax: 
			// function () {logic/statement}; - Anonymous Function
			// function functionName(){logic/statement}; - Named Function 

// This is a Named Function
let funcExpression = function funcName() {
	console.log("Hello from the other side!");
}

funcExpression();

// This is a Anonymous Function
let variableFunction = function() {
	console.log("Hello Love, Goodbye!");
}

variableFunction();

// Function Declaration:
// You can invoked even before the function declarations.
sampleFunction();

// Function Declaration:
// Acts like var
function sampleFunction() {
	console.log("Hello I am from function declaration!");
}

// [SECTION] Class-Based Object Blueprints
	// Allows creation/instantiation of objects using classes as blueprints
	// The constructor is a special method of a class for creating/initializing an object for that class

	// Syntax:
		/*
			class ClassName {
				constructor(objectPropertyA, objectPropertyB){
					this.propertyA = objectPropertyA;
					this.propertyB = objectPropertyB;
				} 
			}
		*/

// Example:
class Car{
	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

// Instantiating an object out of an Class-Based Blueprint.

let myCar = new Car("Toyota", "Vios", 2021);
console.log(myCar);

// Instantiate an object from a constructor without providing any argument.

let sampleCar = new Car("Toyota");
console.log(sampleCar);

sampleCar.name = "Raize";
sampleCar.year = 2010;
console.log(sampleCar);

// [SECTION] ES14 Updates
// toSorted();
	// This method is a new addition to JavaScript in ES14
	// IT allows you  to sort an array by returning a new array instead of updating the original.

let array = [23, 56, 78, 15, 12];
console.log("Array before toSorted() method");
console.log(array);

let sortedArray = array.toSorted();
console.log("Array after toSorted() method");
console.log(sortedArray);
console.log(array);

// findLast()
	// It allows you to find the last occurrence of an element in an array.

let lastEvenNumber = array.findLast((number) => {
	return number % 2 === 0;
});

console.log(lastEvenNumber);

// toSpliced() method
	// It allows you to create an updated array from the original array by removing or adding elements.

let songsList = ["Uhaw", "Raining in Manila", "Ere", "Multo"];

let updatedSongsList = songsList.toSpliced(2, 1, "Buloy");

console.log("Array before toSpliced() method");
console.log(songsList);
console.log("Array after toSpliced() method");
console.log(updatedSongsList);