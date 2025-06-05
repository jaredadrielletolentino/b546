// console.log("Hello World!");

// [SECTION] Functions and Parameters
	// We can directly pass data into the function. The function can then call/use that data which is referred as "parameter" within the function.
	// A parameter acts as a named variable/container that exists only inside of the create function.
	// It is used to store information/data that is provided or fed to a function when it is invoked or called.

		/*
			Syntax:
			function functionName(parameterA, parameterB, . . .) {
				//logic/code to be executed.
			}
		*/
// Example:
function printName(name) {
	console.log("My name is " + name);
}

// [SECTION] Invoking a function and arguments.
	// Values being passed when invoking or calling is called arguments.
	// Arguments are called for data passed to function during invocation.

printName("Juana");

// [SECTION] Variable as arguments
let sampleVariable = "Jared";
printName(sampleVariable);

function checkDivisibilityBy8(num) {
	// I will get the remainder when the num is divided by 8.
	let remainder = num % 8;

	console.log("The remainder of " + num + " divided by 8 is: " + remainder);

	let isDivisibleBy8 = remainder === 0;

	console.log(isDivisibleBy8);
}

// [SECTION] Multiple Parameter

function createFullName(firstName, middleName, lastName) {

	console.log(firstName + ' ' + middleName + ' ' + lastName);

}

createFullName("Jared", "Mendoza", "Tolentino");
