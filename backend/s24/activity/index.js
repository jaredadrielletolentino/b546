/*
1. In the S24 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("Hello World");


/*
	4. Create a function named getUserInfo which is able to return an object. 

		The object returned should have the following properties:
		
		- key - data type

		- name - String
		- age -  Number
		- address - String
		- isMarried - Boolean
		- petName - String

		Note: Property names given is required and should not be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.

*/
function getUserInfo() {
    return {
        name: "John Doe",         // String
        age: 25,                  // Number
        address: "123 Main St",   // String
        isMarried: false,         // Boolean
        petName: "Autumn"          // String
    };
}

// Save the returned object in a variable
let userInfo = getUserInfo();

// Log it to the console
console.log(userInfo);

/*
	5. Create a function named getArtistsArray which is able to return an array with at least 5 names of your favorite bands or artists.
		
		- Note: the array returned should have at least 5 elements as strings.
			    function name given is required and cannot be changed.


		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
	
*/

function getArtistsArray() {
    return ["Park Cannon", "Derek DisCanio", "Billie Joe Armstrong", "Hayley Williams", "Ben Barlow"];
}


let artists = getArtistsArray();
console.log(artists);

/*
	6. Create a function named getSongsArray which is able to return an array with at least 5 titles of your favorite songs.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
*/

function getSongsArray() {
    return ["High Regard", "Elevated", "Boulevard of Broken Dreams", "Let the Flames Begin", "Kalima"];
}

let songs = getSongsArray();
console.log(songs);

/*
	7. Create a function named getMoviesArray which is able to return an array with at least 5 titles of your favorite movies.

		- Note: the array returned should have at least 5 elements as strings.
		        function name given is required and cannot be changed.

		To check, create a variable to save the value returned by the function.
		Then log the variable in the console.

		You can also invoke the function in the console to view the returned value of the function.

		Note: This is optional.
*/
function getMoviesArray() {
  return [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "Final Destination",
    "Marvel Movies"
  ];
}

const movies = getMoviesArray();
console.log(movies);


/*
	8. Create a function named getPrimeNumberArray which is able to return an array with at least 5 prime numbers.

			- Note: the array returned should have numbers only.
			        function name given is required and cannot be changed.

			To check, create a variable to save the value returned by the function.
			Then log the variable in the console.

			You can also invoke the function in the console to view the returned value of the function.

			Note: This is optional.
*/

function getPrimeNumberArray() {
	return [2, 3, 5, 7, 17];
}

const primeNum = getPrimeNumberArray();
console.log(primeNum);

/*
	9. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Declare a global variable named globalTreasure and assign it with a string "Golden Key".
		- Write a function named seekGlobalTreasure that returns the value of a text: "Global Treasure Found:" and globalTreasure to the console.
		- Call seekGlobalTreasure to discover the global treasure.
*/

// Declare a global variable
let globalTreasure = "Golden Key";

// Function to seek and return the global treasure
function seekGlobalTreasure() {
    return "Global Treasure Found: " + globalTreasure;
}

// Call the function and log the result to the console
console.log(seekGlobalTreasure());




/*
	10. Explore and understand the concept of scope in JavaScript through a series of coding challenges. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Inside the same script, define a function named localQuest.
		- Declare a local variable named localGems inside localQuest and assign it with a string "Shiny Diamonds".
		- Return the value of localGems inside localQuest with a text: "Local Gems Discovered:".
		- Try to access the value of localGems variable outside the localQuest function. Make a note of the result. Remember to uncomment this line after attempting to access.
*/

// Define the function
function localQuest() {
    // Declare a local variable inside the function
    let localGems = "Shiny Diamonds";

    // Return the value of the localGems with a message
    return "Local Gems Discovered: " + localGems;
}

// Call the function and log the result to the console
console.log(localQuest());

/*
	11. Explore and understand the concept of scope in JavaScript. Use your knowledge of scope to correctly declare and access variables within different scopes.
		- Create a function named revealBlockSecret.
		- Inside the function, declare a variable named blockSecret and assign it with a string "Hidden Treasure".
		- Return the value of blockSecret within the function and explore its mysterious contents with a message, "Block Secret Revealed:" and the block secret value.
		- Uncomment the code that attempts to access blockSecret outside of the function.
		- Observe the journey of blockSecret through the block's hidden passages.
*/

// Create the function
function revealBlockSecret() {
    // Declare a local variable inside the function
    let blockSecret = "Hidden Treasure";

    // Return the value of blockSecret with a message
    return "Block Secret Revealed: " + blockSecret;
}

// Call the function and log the result to the console
console.log(revealBlockSecret());

/* Debugging */
/* 
	12. Debug the following code to allow the functions to return the correct value and mimic the output.
	- Check syntax of the following code.
	- Check if value is returned.

*/

function returnSquared12(){

	return 12 ** 2

}

/* Don't Modify.*/
let result = returnSquared12();
console.log(result)
/* =============== */


function returnRegisteredEmails(){

	let emails = ["mara@mail.com","clara@mail.com","julie@mail.com"];

	// console.log(emails);
	return emails;
}



/* Don't Modify.*/
let emails = returnRegisteredEmails();
console.log(emails)
/* ============== */


function returnItemInfo(){

	let item = {
		name: "Koko Krunch",
		description: "Koko Krunch is a staple chocolate cereal breakfast",
		price: 75
	}

	return item;
}


/* Don't Modify */
let item1 = returnItemInfo();
console.log(item1);
/* ============== */


function retrieveAccount(){

	let account = {
		username: "michaelVillanueva",
		income: 60000,
		expenses: 25000

	}


	return account;

}



/* Don't Modify. */
let userAccount = retrieveAccount();
console.log(userAccount)
/* ============== */



//Do not modify
//For exporting to test.js
try{
	module.exports = {

		getUserInfo: typeof getUserInfo !== 'undefined' ? getUserInfo : null,
		getArtistsArray: typeof getArtistsArray !== 'undefined' ? getArtistsArray : null,
		getSongsArray: typeof getSongsArray !== 'undefined' ? getSongsArray : null,
		getMoviesArray: typeof getMoviesArray !== 'undefined' ? getMoviesArray : null,
		getPrimeNumberArray: typeof getPrimeNumberArray !== 'undefined' ? getPrimeNumberArray : null,
		seekGlobalTreasure: typeof seekGlobalTreasure !== 'undefined' ? seekGlobalTreasure : null,
		localQuest: typeof localQuest !== 'undefined' ? localQuest : null,
		item: typeof item !== 'undefined' ? item : null,
		returnSquared12: typeof returnSquared12 !== 'undefined' ? returnSquared12 : null,
		result: typeof result !== 'undefined' ? result : null,
		returnRegisteredEmails: typeof returnRegisteredEmails !== 'undefined' ? returnRegisteredEmails : null,
		emails: typeof emails !== 'undefined' ? emails : null,
		returnItemInfo: typeof returnItemInfo !== 'undefined' ? returnItemInfo : null,
		item1: typeof item1 !== 'undefined' ? item1 : null,
		retrieveAccount: typeof retrieveAccount !== 'undefined' ? retrieveAccount : null
	}
} catch(err){

}