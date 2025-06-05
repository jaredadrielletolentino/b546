// console.log("Hello World!");

// [SECTION] if, else if and else Statement

// "if" statement - executes a statement if a specified condition is true.
let numG = -1;

if (numG < 0) {
	console.log("The condition is true!");
	console.log("Hello");
}

// "else if" statement - executes if previous condition are false and if the specified condition is true.
	// the "else if" clause is optional and can be added to capture additional conditions to change the flow of the program.

let numH = 1;

// numG = -1
// if (numG > 0) {
// 	console.log("Hello");
// } else if (numH > 0) {
// 	console.log("The condition is false!");
// 	console.log("World");
// } else if (numH < 0){
// 	console.log("Hello from Jared!");
// }

// else statement
	// executes a statement if all other conditions are false.
	// the else statement is optional and can be added to capture any other result to change the flow of a program.

// numG = -1, numH = 1
if (numG > 0) {
	console.log("Hello");
} else if (numH == 0) {
	console.log("World");
} else {
	console.log("Rebound");
}

// if, else if and else statement with function
/*
	0 - 30 = Not a typhoon yet
	31 - 61 = Tropical depression
	62 - 88 = Tropical Strom
	89 - 117 = Sever Tropical Strom
	> 117 = Typhoon	

*/

function determineTyphoonIntensity(windSpeed) {
	// console.log(typeof windSpeed);
	// early exit
	if(typeof windSpeed !== "number") {
		return "NaN is not a valid value for the windspeed.";
	}

	if(windSpeed < 0) {
		return "Negative windSpeed is invalid!";
	}

	else if(windSpeed <= 30) {
		return 'Not a typhoon yet.';
	} 

	else if(windSpeed <= 61) {
		return "Tropical depression";
	}

	else if(windSpeed <= 88) {
		return "Tropical Storm Detected!";
	}

	else if(windSpeed <= 117) {
		return "Severe Tropical Storm Detected!";
	}

	else {
		return "Typhoon Detected!";
	}
}

let message = determineTyphoonIntensity(65);

if (message === "Tropical Storm Detected!" ) {
	console.warn(message);
}

// [SECTION] Truthy and Falsy values
	// In JavaScript a "truthy" value is a value that is considered true when encountered  in a boolean context.
	// Values are considered true unless defined otherwise.

	// Falsy values/ exceptions for truthy:
	/*
		1. false
		2. 0
		3. -0
		4. " "
		5. null
		6. undefined
		7. NaN
	*/

// Section: Truthy examples:
if (true) {
	console.log("Truthy");
}

if (1) {
	console.log("Truthy");
}

if({}) {
	console.log("Truthy");
}

// Section: Falsy examples:

if (0) {
	console.log("Falsy");
}

if (-0) {
	console.log("Falsy");
}

if (NaN) {
	console.log("Falsy");
}

let name = "Shaina";

if(name) {
	console.log("Truthy or Falsy");
}

// [SECTION] Conditional or Ternary Operator
	// The ternary operator takes three operands
		// 1. condition
		// 2. expression to execute if the condition is true/truthy
		// 3. express to execute if the condition is false/falsy
	// Commonly used for single statement execution where the result consist of only one line of code.

	// The ternary operator has implicit return.
	/*
		(expression) ? ifTrue : ifFalse;
	*/

// Example:
let ternaryResult = (1 < 18) ? true : false;

console.log(ternaryResult);

// console.log("Hi I am before the error");

// conole.log("I am the error");

// console.log("Hi I am after the error");

// Try Catch Finally statement
	// Try catch statements are commonly use for error handling
	// There are instances when the application returns an error/warning that is not necessarily an error in the context of our code.

function showIntensity(windSpeed) {
	try {
		alerat(determineTyphoonIntensity(windSpeed));
	} 
	catch(error) {
		console.log(error);
	} 
	finally {
		alert("Intensity updates will show new alert.");
	}
}

showIntensity(17);

console.log("Hi I am after the error");