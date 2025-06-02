/*
1. In the s22 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message "Hello World" to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
 */

	console.log("Hello World");
	

/*
4. Create the following variables to store the following user details:

    - Variable Name - Value Data Type:
        - firstName - String
        - lastName - String
        - age - Number
        - hobbies - Array
        - workAddress - Object

    - The hobbies array should contain at least 3 hobbies as Strings.
    - The work address object should contain the following key-value pairs:
        - houseNumber: <value>
        - street: <value>
        - city: <value>
        - state: <value>
*/

	// Activity code # 4
	// User details
	let firstName = "Jared"; 
	let lastName = "Tolentino"; 
	let age = 27; 
	let hobbies = ["Reading", "Gaming", "Basketball"]; 
	let workAddress = { 
	  houseNumber: 123,
	  street: "Main St",
	  city: "Springfield",
	  state: "IL"
	};


/*
5. Research how to concatenate strings using + operator in Javascript. 

    - Create a new variable called fullName
        - Concatenate the firstName and lastName variables and save it into the fullName variable
        - Log the full name to the console using the variable: "fullName"
        - Example: "Michael Smith" */


	let fullName = firstName + " " + lastName;
	console.log(fullName); 



/*
6. Continue the use of the + operator to concatenate strings.

    - Create variable named intro to store a message.
        - Combine the string "Hi! My name is" and the fullName variable.
        - Log the message "Hi! My name is" and your fullName to the console.
        - Example: "Hi! My name is Michael Smith"
*/
	
	// Concatenate the string "Hi! My name is" with fullName
	let intro = "Hi! My name is " + fullName;
	console.log(intro); // Logs: "Hi! My name is Michael Smith"




/*
7. Research how to determine the data type of each variable.
    - Add the variables of different primitive data types: 

        - Variable Name - Value:
        - str = "Twice"
        - num = 27
        - bool = true
        - arr = ["Dahyun", "Chaeyoung", "Mina"]
        - obj = { twice: "Dahyun" }

    - Use the operator to determine the data type of each variable.
    - Log the result to the console.
*/
	
	// Variables of different primitive data types
	let str = "Twice"; // String
	let num = 27; // Number
	let bool = true; // Boolean
	let arr = ["Dahyun", "Chaeyoung", "Mina"]; // Array
	let obj = { twice: "Dahyun" }; // Object

	// Log the data types
	console.log(typeof str); // Logs: "string"
	console.log(typeof num); // Logs: "number"
	console.log(typeof bool); // Logs: "boolean"
	console.log(typeof arr); // Logs: "object" (Arrays are also objects in JavaScript)
	console.log(typeof obj); // Logs: "object"



/*
8. Identify and implement the best practices of creating and using variables by avoiding errors and debugging the following codes. 
    - Log the values of each variable to follow/mimic the output.
*/

    /* Don't change name of variables */
    /* Don't change console.log() */

    let realName = "Steve Rogers";
    console.log("My real name is" + realName);

    let currentAge = 40;
    console.log("My current age is: " +  currentAge);

    let profile = {

    	username: "captain_america",
    	fullName: "Steve Rogers",
    	age: 40,
    	isActive: false

    };

    console.log("My Full Profile: ");
    console.log(profile);

    let deposits = [2000,4000,600,100,true,{},[1,2,3]];
    console.log("Your deposits: " + deposits);

    let expenses = [1000,2000,500,210];
    console.log("Your expenses: " + expenses);

    let isAdmin = true;
    console.log("Is the current user an admin?: " + isAdmin);

    const interestRate = 30;
    console.log("The current interest rate: " + interestRate);

    const loginKey = "EcommerceAPI";
    console.log("The current login key is: " + loginKey);

    let bankCode = "BANK123";
    bankCode = "BANK456";
    console.log("Bank code: " + bankCode);

    let bankBalance = 500;
    bankBalance = bankBalance +++ 100;
    console.log("Updated bank balance: " + bankBalance);



    //Do not modify
    //For exporting to test.js

    //Refer to this list for all available and accepted variable names.
    //All needed variables are listed here.
    //Error in checking may result if one of the following variables was not created or initialized.

    try {
    
        module.exports = {
    
    
            firstName : typeof firstName !== 'undefined' ? firstName : null,
            lastName : typeof lastName !== 'undefined' ? lastName : null,
            email : typeof email !== 'undefined' ? email : null,
            age : typeof age !== 'undefined' ? age : null,
            hobbies : typeof hobbies !== 'undefined' ? hobbies : null,
            workAddress : typeof workAddress !== 'undefined' ? workAddress : null,
            fullName : typeof fullName !== 'undefined' ? fullName : null,
            intro : typeof intro !== 'undefined' ? intro : null,
            str : typeof str !== 'undefined' ? str : null,
            num : typeof num !== 'undefined' ? num : null,
            bool : typeof bool !== 'undefined' ? bool : null,
            arr : typeof arr !== 'undefined' ? arr : null,
            obj : typeof obj !== 'undefined' ? obj : null,
            realName : typeof realName !== 'undefined' ? realName : null,
            currentAge : typeof currentAge !== 'undefined' ? currentAge : null,
            friends : typeof friends !== 'undefined' ? friends : null,
            profile : typeof profile !== 'undefined' ? profile : null,
            deposits : typeof deposits !== 'undefined' ? deposits : null,
            expenses : typeof expenses !== 'undefined' ? expenses : null,
            isAdmin : typeof isAdmin !== 'undefined' ? isAdmin : null,
            interestRate : typeof interestRate !== 'undefined' ? interestRate : null,
            loginKey : typeof loginKey !== 'undefined' ? loginKey : null,
            bankCode : typeof bankCode !== 'undefined' ? bankCode : null,
            bankBalance : typeof bankBalance !== 'undefined' ? bankBalance : null
    
        };
    
    } catch (err) {}