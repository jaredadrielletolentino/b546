// console.log("Hello World!");

// [SECTION] While Loop
/*
	-A while loop takes in an expression/condition.
	-Expressions are any unit of code that can be evaluated to a value.
	-If the condition evaluates to true, the statements inside the code block will be executed or run.
	- A loop will iterate/run a certain number of times until expression/condition is met.
	- Iteration is the term given to the repitition of statements.
	Syntax:
		while(expression/condition) {
			statement/s;

			decrement/increment;
		}
*/

let count = 5;

// This while loop will run as long as the value of count is not equal to zero.
while (count !== 0) {
	console.log("While " + count);

	// This decrementation decreases the value of count by 1 after every iteration to stop the loop when it reaches 0.
	// Loops occupy a significant amount of memory space in our devices.
	// Warning: Make sure that expressions/conditions in loops have their increment/decrement operators to stop the loop.
	// Forgetting to include this loops will make your application run infinitely which will cause your device to crash.
	count--;
}

// [SECTION] Do-While Loop
	// A do-while loop works lot like the while loop. But unlike while loops, do-while loops guarantees that the code will run at least once.
		/*
		Syntax:
			do {
				statement/s;
				decrement/increment;
			} while (expression/condition)

		*/

function demoDoWhile(number) {

	do {
		console.log("Do While: " + number);

		// Addition re-assignment operator;
		number += 1;
	}

	while (number < 10);
}

// [SECTION] For Loop
	// A for loop is more flexible than while and do-while loops. It consists of three parts:
	/*
		1. "Initialization" value that will track the progression of the loop.
		2. The "expression/condition" that will evaluate which will determine whether the loop will run one more time.
		3. "Iteration/Final Expression" indicates how to advance the loop.
		Syntax:
			for(initialization; expression/condition; iteration) {
				statement/statements;
			}
	*/

for(let count = 0; count <= 20; count += 3) {
	console.log("For Loop Value: " + count);
}

// 				0123456789
let myString = "Jerico De Jesus";

// In JavaScript characters in strings can be counted using the length property.
console.log(myString.length);

// Accessing elements of a string
// Individual characters of a string may accessed using it's index number.
// The first character in a string coresponds to the number 0, the next 1 up to the nth number.
console.log(myString[0]);
console.log(myString[1]);
console.log(myString[6]);

// Will create a loop that will print out the individual letters of the myString variable.

for(let x = 0; x < myString.length; x++) {
	// The current value of myString is printed out using it's index value.
	console.log(myString[x]);
}

// Create a string named "myName" with a value of "AlEx"

let myName = "AlEx";

for (let i = 0; i < myName.length; i++) {
	if(
		myName[i].toLowerCase() == "a" ||
		myName[i].toLowerCase() == "i" ||
		myName[i].toLowerCase() == "u" ||
		myName[i].toLowerCase() == "e" ||
		myName[i].toLowerCase() == "o" 
	) {
		console.log(3);
	} else {
		console.log(myName[i]);
	}
}

// 1st loop result = 3
// 2nd loop result = l
// 3rd loop result = 3
// 4th loop result = x

function printOddNumbers(limit) {
    let oddNumbers = "The odd numbers found are the following: ";

    for (let i = 1; i <= limit; i++) {

        // Check if the number is even
        if (i % 2 === 0) {
            continue;  // Skip even numbers
        }

        // Print the odd number with the label
        console.log("Continue and Break: " + i);

        // Add the odd number to the oddNumbers string
        oddNumbers += i + ", ";

        // Check if the number is greater than 10
        if (i > 10) {
            break;  // Stop the loop
        }
    }

    return oddNumbers;
}

