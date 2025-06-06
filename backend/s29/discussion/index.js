// console.log("Happy Long Weekend!.");

// [SECTION] Manipulating Arrays with Array Methods:
	// JavaScript has built-in functions and methods for arrays. This allows us to manipulate and access array Items.
	// There are 3 types of JS Array Methods: Mutators, Iterators, Non-Mutators.
		// Mutators Methods allows us to manage and perform tasks on an array by updating the contents of the original Array.
		//  Non-Mutator Methods allows us to manage and perform tasks on an array without updating the contents of the original array.

// [SECTION] Mutator Methods
	// Mutator methods are built-in JS array methods that mutate or modify an array after they're created.
	// These methods manipulate the original array by performing various tasks such as adding or removing elements.

let fruits = ['Apple', 'Orange', 'Singkamas', 'Dragon Fruit'];
console.log(fruits);

// checks the number of elements in the fruits array:
console.log(fruits.length);

// .push();
	// Adds an element in the end of an array AND returns the arrays updated length.
	// Syntax:
		// arrayName.push("element/itemToBePushed");

	console.log('Current Array:');
	console.log(fruits);

	let fruitsLength = fruits.push("Pineapple");

	console.log("Mutated Array after the push method:");
	console.log(fruits);

	console.log(fruitsLength)

// .pop();
	// Removes the last element in an array AND return the removed element.
	// Syntax:
		// arrayName.pop();

	console.log("Fruits array before the pop():");
	console.log(fruits);

	let removedItem = fruits.pop();

	console.log("Fruits array after the pop():");
	console.log(fruits);

	console.log(removedItem);

// .splice();
	// Removes elements from a specified index number and adds element.

	// Syntax:
		// arrayName.splice(startingIdex,deleteCount, elementToBeAdded);

	console.log("Fruit array before the splice():");
	console.log(fruits);

	// splice will behave like a push method
	// fruits.splice(fruits.length, 0, "Test");
	// Make  splice method behave like a pop method
	// fruits.splice(fruits.length -1, 1);

	// We want to add an element in the start or in the index 0;
	// fruits.splice(0, 0, "Mango");

	// What if we want to remove the first element in our array:
	let returnedValueBySplice = fruits.splice(0, 1);

	console.log("Fruit array after the splice():");
	console.log(fruits);

	console.log(returnedValueBySplice);

// .sort();
	// Rearranges  the array elements in an alphanumeric order;
		/* Syntax:
			arrayName.sort();
		*/

	console.log("Fruit array before the sort():");
	console.log(fruits);

	// fruits.sort();

	console.log("Fruit array after the sort():");
	console.log(fruits);

// .reverse();

	fruits.reverse();
	console.log(fruits);