// console.log("Hello World!");

// [SECTION] Introduction to Arrays
	// So far we have explored storing values on individual variables. However, modeling real-world information is a bit more complicated.

// We can contain multiple related date/values in an array:
let studentNumbers = [
	'2020-1923',
	'2020-1924',
	'2020-1920',
	'2020-1925',
	'2020-1926'
];

// [SECTION] Array Structure
	// Arrays are used to store multiple related values in a single variable.
	// They are declared using a square bracket([]) also known as "Array Literals";
	// Commonly used to store numberous amounts of data to manipulate in order to perform a numbers tasks.
	// Array also provide access to a number of built in functions/methods that help in achieving our goals.
	// A method is another term for functions associated with an object and is used to execute statements that are relevant to a specific object.
	// Arrays are also objects which is of another type.
		/*
			Syntax:
				let/const arrayName = [elementA, elementB, elementC, . . .];
		*/

// Array of numbers:
let grades = [98.5, 94.3, 89.82, 90.1];
console.log(typeof grades);
console.log(grades);

// Array of Strings:
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'REdfox', 'Neo', 'Gateway'];
console.log(computerBrands);

// Array of Boolean Values:
	// Truth Table
let booleanArray = [true, false, false, true];
console.log(booleanArray);

// Mixed data type in an Array:
// a bad practice
// This is not recommeded
let mixedArr = [78, null, undefined, false, 'Hello'];
console.log(mixedArr);

// Create an array with values from variables:
let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];
console.log(cities);

// length property to get the number of elements in our Array:
console.log(cities.length);

let blankArr = [];
console.log(blankArr.length);

// .length can also be used to get the number characters in a String:
let fullName = "Kevin Durant";
console.log(fullName.length);

// [SECTION] Accessing elements of an array
	// accessing array elements is one of the more common tasks that we do in an array
	// this can be done through the use of array indexes.
	// Each element, in an array is associated with it's own index/number.
	// In JavaScript, the first element is associated with the number 0 and increasing this number by 1 for every element.
	// The reason an array starts with 0 is due to how the language is designed.
	/*
		Syntax:
			arrayName[index]
	*/

console.log(grades[0]);
console.log(computerBrands[3]);

// How do you think you can get the last element in an array without counting the number of elements.
// Negative indexing
console.log(computerBrands[computerBrands.length - 1]);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Doncic"];

// You can store element in a variables:
let currentLaker = lakersLegends[2];
console.log(currentLaker);

// Reassignment of array elements:
console.log("Array before reassignment: ");
console.log(lakersLegends);

lakersLegends[2] = "Pau Gasol";
console.log('Array after reassignment: ');
console.log(lakersLegends);

// [SECTION] Looping over array.

let newArr = [1, 2, 3, 4, 5];

// for(let index = 0; index < newArr.length; index++) {
// 	console.log(newArr[index]);
// }

let numArr = [5, 12, 30, 46, 40];

// We will be creating a function that will determind if all the elements in an array is divisible by 5 or not.

function isAllDivisibleBy5(array) {
	
	for(let index = 0; index < array.length; index++) {
		// console.log(array[index]);
		if(array[index] % 5 !==0) {
			return false;
		}
	}

	return true;
}