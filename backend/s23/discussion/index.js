// console.log("Hello World!");

// [SECTION] Arithmetic Operators
// Arithmetic Operators allow mathermatical operations.

let x = 20;
let y = 5;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of Subtraction operator: " + difference);

let product = x * y;
console.log("Result of Multiplication operator: " + product);

let quotient = x / y;
console.log("Result of Division operator: " + quotient);

// [SECTION] Assignment Operators
// Assignment Operators assign a value to a variable.

console.log("Assignment Operators:");

// Basic Assignment Operators 
// The assignment operator assigns the value of the **right** operand to a variable.

let assignmentNumber = 8;
console.log(assignmentNumber);

// Addition Assignment Operator
// The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable.
assignmentNumber = assignmentNumber + 2;
console.log(assignmentNumber);

// Shorthand for Addition Assignment Operator
assignmentNumber += 2;
console.log(assignmentNumber);

// Shorthand for Subtraction/Multiplication/Division Assignment Operator (-=, *=, /=)
assignmentNumber -= 2;
console.log(assignmentNumber);

// [SECTION] Increment (++) and Decrement (--)
// Operators that add or subtract values by 1 and reassign the value of the variable where the increment/decrement was applied to.

// Increment (++)

let z = 1;

// Pre-increment (Add 1 first, then assign)
// The value of "z" is added by a value of one BEFORE returning the value and storing it in the variable "increment".
let increment = ++z;

console.log("Result of pre-increment: " + increment);

// The value of "z" was also increased event though we didn't implicity specify any value reasiggnment.
console.log("Result of pre-increment: " + z);

// Post-increment (Assign first, then add 1)
// The value of "z" is returned and stored in the variable "increment" then the value of "z" is increased by one.
increment = z++;

// The value of "z" is at 2 before it was incremented
console.log("Result of post-increment: " + increment);
// The value of "z" was increased by one
console.log("Result of post-increment: " + z);

// Decrement (--)

// Pre-decrement (subtract 1 first, then assign)
// The value of "z" is added by a value of one BEFORE returning the value and storing it in the variable "decrement"
let decrement = --z;

// The value of "z" is at 3 before it was decremented.
console.log("Result of pre-decrement: " + decrement);
console.log("Result of pre-decrement: " + z);

// Post-decrement (Assign first, then subtract 1)
// The value of "z" is returned and stored in the variable "decement" then the value of "z" is decreased by one.
decrement = z--;

// The value of "z" is at 2 before it was decremented.
console.log("Result of post-decrement: " + decrement);
console.log("Result of post-decrement: " + z);

// [SECTION] Type Coercion
/*
    Type coercion: JavaScript automatically changes one value type to another.
    Why: It happens when mixing different value types, leading to unexpected results.
    How: Values are converted automatically to perform operations without errors.
*/
// Adding/concatenating a string and a number will result as a string
let numA = '10';
let numB = 12;

let coercion = numA + numB;

console.log(coercion);

// The typeof operator is used to check the data type of a value/expression and returns a string value of what the data type is.
console.log(typeof coercion);

// Adding boolean to a number, the result is a number.
// true is 1
let coercionTrue = true + 1;
console.log(coercionTrue);
// false is 0
let coercionFalse = false + 1;
console.log(coercionFalse);

// [SECTION] Comparison Operators

/* 
    - Checks whether the operands are equal/have the same content
    - Also COMPARES the data types of 2 values
    - Strict equality operators are better to use in most cases to ensure that data types provided are correct
    - Returns a boolean value
*/

// Strict Equality Operator
console.log("Comparison Operators");
console.log("Strict Equality Operator:", 1 === 1);
console.log("Strict Equality Operator:", 1 === 2);
console.log("Strict Equality Operator:", 1 === '1');
console.log("Strict Equality Operator:", 'juan' === 'juan');
console.log("Strict Equality Operator:", 0 === false);

// Strict Inequality Operator
// Checks whether the operands are NOT equal/have the same content
// Also COMPARES the data types of 2 values
console.log("Strict Strict Inequality Operator:", 1 !== 1);
console.log("Strict Strict Inequality Operator:", 1 !== 2);
console.log("Strict Strict Inequality Operator:", 1 !== '1');
console.log("Strict Strict Inequality Operator:", 'juan' !== 'juan');
console.log("Strict Strict Inequality Operator:", 0 !== false);

// [SECTION] Relational Operators

// Some comparison operators checks wether one value is greater or less than to the other value.

let a = 50;
let b = 65;

// GT or Greater Than Operator (>)
let isGreaterThan = a > b;

// LT or Less Than Operator (<)
let isLessThan = a < b;

// GTE or  Greater Than or Equal Operator (>=)
let isGTorEqual = a >= b;

// LTE or Less Than or Equal Operator (<=)
let isLTorEqual = a <= b;

console.log("Relational Operators: ", isGreaterThan);
console.log("Relational Operators: ", isLessThan);
console.log("Relational Operators: ", isGTorEqual);
console.log("Relational Operators: ", isLTorEqual);

let numStr = "30";
console.log("Relational Operators: ", a > numStr); // true - forced coercion to change the string to a number

// [SECTION] Logical Operators (&& AND, || OR, ! NOT)
// && it will return true if both value is true, || return true if atlease 1 of the value is true, ! NOT is opposite of the value

let isLegalAge = true;
let isRegistered = false;

// Logical AND Operator (&&)
// Returns TRUE if all operands are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Result of Logical AND Operator: ", allRequirementsMet );

// Logical OR Operator (||)
// Returns TRUE if ONE of the operands is true.
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Result of Logical OR Operator: ", someRequirementsMet);

// Logical NOT Operator (!)
// Returns the opposite value
let someRequirementsNotMet = !isRegistered;
console.log("Result of Logical NOT Operator: ", someRequirementsNotMet);
