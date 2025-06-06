// console.log("Hello World!");

// [SECTION] JSON Objects
	// JSON stands for JavaScript Object Notation
	// JSON is also used in other programming languages.
	// Core JavaScript has built in JSON object that contains methods for parsing JSON objects and converting into JavaSCript objects.

	// JavaScript objects are not to be confused with JSON.
	// JSON is used for serializing data types into bytes.
	// Serialization is the process of converting data into series of bytes for easier transmission or transfer of information.
	// Syntax:
		/*
			{
				"propertyA" : "valueA",
				"propertyB" : "valueB",
				. . .
			}
		*/

// Example of JSON objects:
/*{
	"city" : "Quezon City",
	"province" : "Metro Manila",
	"country" : "Philippines"
}*/

// Array of JSON Objects:

/*[
	{ "city": "Quezon City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Manila City", "province": "Metro Manila", "country": "Philippines" },
    { "city": "Makati City", "province": "Metro Manila", "country": "Philippines" }
]*/

// [SECTION] JSON Methods
	// Stringified JSON is a JavaScript object converted into a string to b e used in other functions of a JavaScript application.
	// They are commonly used in HTTP request where information is required to be sent and received in a stringified JSON format.

	// Requests are an important part of programming where an application communicates with a backend application to perform different tasks such as getting/creating data in a database.

	// A frontend application is an application that is used to interact with users to perform different visual tasks and display information while backend applications are commonly used for all the business logic and data processing.

	// A database normally stores information/data that can be used in most applications.

	// Commonly stored data in databases are user information, transaction records and product information.

	// Node/Express JS are two of technologies that are used for creating backend applications which processes requests from frontend applications.

	// Node JS is a Java Runtime Environment (JRE)/software that is made to execute other software.

	// Express JS is a NodeJS framework that provides features for easily creating web and mobile applications.

	// An example of where JSON is also used is on package.json files which an express JS application uses to keep track of information regarding a project.

// Stringify method:
	// Syntax:
		// JSON.stringify(data);

let batchesArr = [{batchName: 'Batch X'}, {batchName: 'Batch Y'}];
console.log(batchesArr);

console.log(JSON.stringify(batchesArr));
console.log(typeof JSON.stringify(batchesArr));

let batchesJSON = JSON.stringify(batchesArr);

let data = JSON.stringify({
	name: 'John',
	age: 31,
	address: {
		city: "Manila",
		country: "Philippines"
	}
});

console.log(data);

// Comparison in converting stringified JSON into a JavaScript Object.
console.log(batchesJSON);

// Converting Stringified JSON into a JavaScript Object.
console.log(JSON.parse(batchesJSON));

console.log(JSON.parse(data));

// Mock Technical Exam - JS
function removeDuplicates(arr) {
	
	return arr.filter((item, index) => arr.indexOf(item) === index);
}

function capitalizeFirstLetter(str) {

	return str[0].toUpperCase() + str.slice(1);
}

function removeFalsyValues(arr) {
	return arr.filter(Boolean);
}

let usersArray = [{ name: 'John', age: 25}, { name: 'Alice', age: 17 }, { name: 'Bob', age: 30 }]

function filterByAgeRange(arr, minAge, maxAge) {
	let filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].age >= minAge && arr[i].age <= maxAge) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

let sum = 0;
function calculateSum(numArray) {
	for (let i = 0; i < numArray.length; i++) {
		console.error(sum += numArray[i]);
	}
	return sum;
}

let  numbers = [1, 2, 3, 4, 5];
let result = calculateSum(numbers);

console.log(result);

function factorial(n) {
	if(n > 0) {
		return 1;
	} else {
		return n* factorial(n - 1);
	}
}

let answer = factorial(4);
console.log(answer);

function foo() {
	return 10;
}

function bar() {
	return 20;
}

function baz() {
	return foo + bar;
}

console.log(baz());

/*function processData(data) {
	for (let i = 0; i < data.length; i++) {
		if(data[i] % 2 = 0) {
			data.splice(i, 1);
		}
	}
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
processData(numbers);
console.log(numbers);*/

const cart = [];

function addToCart(product) {

	if(!product || typeof product !== 'object' || !product.name || typeof product.name !== 'string' || typeof product.price !== 'number' || !!product.isActive) {
		console.error('Invalid or inactive product.');
		return;
	}

	cart.push(product);
}

addToCart({
	name: 'Example Product',
	price: 29.99,
	isActive: true
});

console.log('Cart contents: ', cart);

function colorRandomizer() {
	let colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
	let index = Math.random() * colors.length;
	return colors[index];
}

let colorOfTheDay = colorRandomizer();
console.log(colorOfTheDay);

function findMedian(numbers) {
	let sortedNumbers = numbers.sort((a, b) => a - b);
	let middleIndex = Math.floor(sortedNumbers.length / 2);
	if(sortedNumbers.length % 2 === 0) {
		return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
	} else {
		return sortedNumbers[middleIndex + 1];
	}
}

let median = findMedian([3, 6, 9, 1, 5]);
console.log(median);

/*function sumEvenNumbers(arr) {
	let sum = 0;
	arr.forEach(num => {
		if(num % 2 === 0){
			sum = num
		}
	});
}

let sum = sumEvenNumbers([15, 2, 20, 33, 19])
console.log(sum)*/

function arraysEqual(arr1, arr2) {

	if(arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

let array1 = [1, 2, 3];
let array2 = [3, 1, 2];
console.log(arraysEqual(array1, array2));


/*function sanitizeToken(token) {
	try {
		if (typeof token !== 'string') {
			throw new Error('Invalid token format');
		}

		if (!token.startswith("Bearer")) {
			throw new Error('Token does not start with "Bearer"');
		}
		
		return token.slice(token.length-1);
	} catch (error) {
		console.error('Error:', error.message);
		return token;
	}
	let token1 = "Bearer eyJhbGcioiJIUZI1NiIsInR5CCI6IKpxVCJ9"; console.log(sanitizeToken(token1));
*/

function multiplyNumbers(a, b) {
	return a * b;
}

let result5 = multiplyNumbers('2', '3');
console.log(result5);

console.log(1 + '2' + 3 - '4');

let loggedUser = {
	username: 'john_doe',
	email: 'JoDoe@yahoo.com'
};

/*function updateUserEmail(newEmail) {
	let loggedUser = {
		email: newEmail
	};
	console.log('New email updated:', loggedUser.email);
}

updatedUserEmail("jdBusiness@gmail.com")
console.log(loggedUser);*/

/*function getReducedTotal(array) {
	return array.reduce((x,y) => x + y);
}
console.log(getReducedTotal([0.1, 0.2]))

function loginUser(username, password) {
	if(username !== null && password !== null) {
		return
		{
			username: username,
			isLoggedIn: true
		};
	} else {
		return {isLoggedIn: false};
	}
}
console.log(loginUser('jennifer_huh', 'imFearlessHuh'));*/

