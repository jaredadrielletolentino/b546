console.log("Hello World");


/* Member 1-2 */
/*
    1. Create a login function which is able to receive 3 parameters called username,password and role.
        -add an if statement to check if the the username is an empty string or undefined or if the password is an empty string or undefined or if the role is an empty string or undefined.
            -if it is, return a message in console to inform the user that their input should not be empty.
        -add an else statement. Inside the else statement add a switch to check the user's role add 3 cases and a default:
                -if the user's role is admin, return the following message:
                    "Welcome back to the class portal, admin!"
                -if the user's role is teacher,return the following message:
                    "Thank you for logging in, teacher!"
                -if the user's role is a student, return the following message:
                    "Welcome to the class portal, student!"
                -if the user's role does not fall under any of the cases, as a default, return a message:
                    "Role out of range."
*/


/* Member 3 - 5 */
/*
    2. Create a function called checkAverage which is able to receive 4 numbers as arguments calculate its average and log a message for  the user about their letter equivalent in the console.
        -add parameters appropriate to describe the arguments.
        -create a new function scoped variable called average.
        -calculate the average of the 4 number inputs and store it in the variable average.
        -research the use of Math.round() and round off the value of the average variable.
            -update the average variable with the use of Math.round()
             -Do not use Math.floor().
            -console.log() the average variable to check if it is rounding off first.
        -add an if statement to check if the value of average is less than or equal to 74.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is F"
        -add an else if statement to check if the value of average is greater than or equal to 75 and if average is less than or equal to 79.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is D"
        -add an else if statement to check if the value of average is greater than or equal to 80 and if average is less than or equal to 84.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is C"
        -add an else if statement to check if the value of average is greater than or equal to 85 and if average is less than or equal to 89.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is B"
        -add an else if statement to check if the value of average is greater than or equal to 90 and if average is less than or equal to 95.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A"
        -add an else if statement to check if the value of average is greater than 96.
            -if it is, return the following message:
            "Hello, student, your average is <show average>. The letter equivalent is A+"

        Invoke and add a number as argument using the browser console.
*/

// START OF YOUR CODE

// start of mbr 1 and 2
function login(username, password, role){

	if (username === "" || username === undefined || password === "" || password === undefined || role === "" || role === undefined){
		return "A field was left empty. Please double-check the login credentials.";
	}

    else {

        switch (role) {

          case "admin":
            return "Welcome back to the class portal, admin!";
            break;

          case "teacher":
            return "Thank you for logging in, teacher!";
            break;

          case "student":
            return "Welcome to the class portal, student!";
            break;

          default:
            return "Role out of range.";
        };
        
      }

}
// mbr 1 and 2

// start of mbr 3 to 5
function checkAverage(num1, num2, num3, num4) {
    // Calculate the average and store it in the average variable
    let average = (num1 + num2 + num3 + num4) / 4;
    
    average = Math.round(average);
    
    let letterGrade;

    if (average <= 74) {
            letterGrade = "F";
        }else if (average >= 75 && average <= 79) {
            letterGrade = "D";
        }else if (average >= 80 && average <= 84) {
            letterGrade = "C";
        }
        else if (average >= 85 && average <= 89) {
            letterGrade = "B";
        } 
        else if (average >= 90 && average <= 95) {
            letterGrade = "A";
        } 
        else {
            letterGrade = "A+";
        }   
        return `Hello, student, your average is ${average}.The letter equivalent is ${letterGrade}`;

}
// end of mbr 3 to 5



// END OF YOUR CODE


//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        login: typeof login !== 'undefined' ? login : null,
        checkAverage: typeof checkAverage !== 'undefined' ? checkAverage : null

    }
} catch(err){

}