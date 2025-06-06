// console.log("Welcome back!");

// [SECTION] Non-Mutator Methods
	// Non-Mutator methods are functions that do not modify or change an array after they're created.

	let countries = ['US', 'PH', 'CAN', 'SG', 'PH', 'FR', 'DE'];

	console.log("This is the original Array:");
	console.log(countries);
// indexOf();
	// returns the index number of the "FIRST" matching element found in array.
	// If no match was found, the result will be -1.
	// The search process will be done from the first element (index zero) proceeding the last element.
		// Syntax:
			// arrayName.indexOf(searchValue);
			// arrayName.indexOf(searchValue, startingIndex);

let firstIndexOfPH = countries.indexOf('PH', 2);
console.log(firstIndexOfPH);
console.log(countries);

let invalidCountry = countries.indexOf('BR');
console.log(invalidCountry);

// slice()
	// portion/slices elements from an array AND returns a new array.
	// Syntax:
		// arrayName.slice(startingIndex);
		// arrayName.slice(startingIndex, endingIndex);

let sliceArrayA = countries.slice(2);
console.log(sliceArrayA);
console.log(countries);

// concat();
	// combines two or more arrays and returns the combined result.
		// arrayA.concat(arrayB);
		// arrayA.concat(elementA);

let tasksArrayA = ['drink HTML', 'eat javascript'];
let tasksArrayB = ['inhale CSS', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

console.log("tasksArrayA: ", tasksArrayA);
console.log("tasksArrayB: ", tasksArrayB);
console.log("tasksArrayC: ",tasksArrayC);

// Using concat to concatenate an array with another array.
let tasks = tasksArrayB.concat(tasksArrayA);
console.log("Result from concat method: ");
console.log(tasks);

// Using concat to concatenate an array with an element.
let secondTasks = tasksArrayB.concat("I am an array");
console.log("Result from concat method: ");
console.log(tasks);

// concatenate multiple arrays using concat method:
let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log("Result of concatenating multiple arrays:");
console.log(allTasks);


// [SECTION] Iterator Methods
	// Iteration methods are loops designed to perform repititive tasks on arrays.
	// Iteration methods loops over an array data resulting in complex tasks.

// forEach();
	// Similar to a for loop that iterates on each array element.
	// The anonymous function passed in the forEach() method will be run repeatedly for each item in the array.
	// forEach() does not return anything.
	// Syntax:
		// arrayName.forEach(function(indevElement){statement/logic});

console.log("This is our allTasks array:");
console.log(allTasks);

allTasks.forEach(function(task){
	console.log(task);
});

// Using forEach method we will be filtering the allTasks Array, push the element the allTasks array that has more than 10 characters.
let filteredTasks = [];

allTasks.forEach(function(task){
	// This if statement will verify if the element contains more than 10 characters.
	if (task.length > 10) {
		filteredTasks.push(task);
	}
})

console.log(filteredTasks);

// let's try this:
let adminList = [];

// Mini-activity:
	// You will be filtering the users array, push the admin users to the adminList array.
// Array of objects
let users = [
    {
        username: "peterSmith",
        isAdmin: false
    },
    {
        username: "andrewJones99",
        isAdmin: true
    },
    {
        username: "alexMartin",
        isAdmin: false
    },
    {
        username: "smithyS",
        isAdmin: true
    }

];

users.forEach(function(user){
	if (user.isAdmin === true) {
		adminList.push(user);
	}
});

console.log(adminList);

// map() method
	// Iterates on each element and returns a new array with different values depending on the result of the functions operation:
	// Syntax:
		// arrayName.map(function(indivElement){statement/logic});

let numbers = [1, 2, 3, 4, 5];

let numberMap = numbers.map(function(number){
	console.log(number);

	return number + 1;
});
console.log(numbers);
console.log(numberMap);

// every()
	// checks if all elements in an array meet the given condition.
	// This is useful for validating data stored in arrays especially when dealing with large amounts of data.
	// Returns a true value if all elements meets/satisfy the condition and false if otherwise.
	// Syntax:
		// arrayName.every(function(indivElement){ return expression/condition});

let grades = [86, 85, 89, 90];

let allPassingGrade = grades.every(function(grade){

	// console.log(grade);
	return grade >= 75;
});

console.log(allPassingGrade);

// filter();
	// Returns new array that contains elements which meets the given condition.
	// returns an empty array if no elements were found.
	// Syntax:
		// arrayName.filter(function(indivElement){ return express/condition});

let filterValid = numbers.filter(function(number) {

	return number < 3;
});

console.log(filterValid);