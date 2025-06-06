	/*
1. In the S23 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

console.log("hello");

/*
    4. Debug the following code to return the correct value and mimic the output.
        - Check the value’s data type. Re-assign values if needed.
        - Check the if the operator used is correct.
*/

    let num1 = 25;
    let num2 = 5;
    let sum1 = num1 + num2;

    console.log("The result of num1 + num2 should be 30.");
    console.log("Actual Result:");
    console.log(sum1);

    let num3 = 156;
    let num4 = 44;
    let sum2 = num3 + num4;

    console.log("The result of num3 + num4 should be 200.");
    console.log("Actual Result:");
    console.log(sum2);

    let num5 = 17;
    let num6 = 10;
    let difference1 = num5 - num6;

    console.log("The result of num5 - num6 should be 7.");
    console.log("Actual Result:");
    console.log(difference1);

    let password = "gonpachiro";
    let confirmPassword = "gonpachiro";

    //Research the use of .length property
    let isCorrectLength = password.length > 8;

    console.log("Is the password's length correct?");
    console.log(isCorrectLength);


    let match = password === confirmPassword;

    console.log("Do the passwords match?");
    console.log(match);

/*
5. Research about Modulo Operator
    - Declare a variable named number and assign any given number.
    - Declare a variable named isDivisibleBySeven and initialize it to false.
    - Use the modulo assignment operator to check if the given number is divisible by 7.
    - Log the values of each variable to follow/mimic the output.
*/
    
    let number = 14;
    let isDivisibleBySeven = number % 7 === 0;

    console.log("Is 14 divisible by 7?");
    console.log(isDivisibleBySeven);

/*
6. Research about Multiplication Assignment Operator
    - Use the multiplication assignment operator to multiply the product by 4.
    - Log the value of the total cost in the console to follow/mimic the output.
*/
    let product = 6;
    product *=4;
    console.log(product);
/*
7. Research about Division Assignment Operator
    - Using the variable quotient,use the division assignment operator to divide the quotient by 3.
    - Log the value of the total cost in the console to follow/mimic the output.
*/
    let quotient = 24;
    quotient /= 3;
    console.log(quotient);
/*
8. Research about Modulo/Remainder Assignment Operator
    - Using the variable modulo,use the modulo assignment operator to get the remainder of the modulo by 3.
    - Log the value of the total cost in the console to follow/mimic the output.
*/
    let modulo = 11;
    modulo %= 3;
    console.log(modulo);
/*
9. Given the values below, calculate convert the temperature from celsius to fahrenheit and save the result in a variable called resultFahrenheit.
    - Log the value of the variable in the console.
*/
    let tempCelsius = 132;
    let resultFahrenheit = (tempCelsius * 9/5) + 32;
    console.log(tempCelsius + " degrees Celsius when converted to Fahrenheit is " + resultFahrenheit);

/*
10. Given the values below, identify if the values of the following variable are divisible by 8.
   - Use a modulo operator to identify the divisibility of the number to 8.
   - Save the result of the operation in an appropriately named variable.
   - Log the value of the remainder in the console.
   - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy8
   - Log a message in the console if num7 is divisible by 8.

*/
    let num7 = 165;
    let remainder7 = num7 % 8;
    let isDivisibleBy8 = (remainder7 === 0);
    //Log the value of the remainder in the console.
    console.log("The remainder of 165 divided by 8 is: " +remainder7);
    console.log("Is num7 divisible by 8?");
    console.log(isDivisibleBy8);
    //Log the value of isDivisibleBy8 in the console.


/*
11. Given the values below, identify if the values of the following variable are divisible by 4.
   - Use a modulo operator to identify the divisibility of the number to 4.
   - Save the result of the operation in an appropriately named variable.
   - Log the value of the remainder in the console.
   - Using the strict equality operator, check if the remainder is equal to 0. Save the returned value of the comparison in a variable called isDivisibleBy4
   - Log a message in the console if num8 is divisible by 4.

*/
let num8 = 348;
let remainder8 = num8 % 4;
let isDivisibleBy4 = (remainder8 === 0);

//Log the value of the remainder in the console.
console.log("The remainder of 348 divided by 4 is: " + remainder8);
console.log("Is num8 divisible by 4?");
console.log(isDivisibleBy4);
//Log the value of isDivisibleBy4 in the console.


/* 
    12. Given the values below, calculate the average and identify if the average score is greater than 75.
        - Create a new variable called, "average".
        - Calculate the average of the group scores and save it in the average variable.
        - Log the value of average variable.
        - Create a new variable called isPassing.
        - Using a relational operator, display if the average score is greater than 75.
        - Log the value of the isPassing variable.

*/

let groupA_score = 75;
let groupB_score = 80;
let groupC_score = 76;
let groupD_score = 74;

let average = (groupA_score + groupB_score + groupC_score + groupD_score) / 4;
//Log the value of the average in the console.
console.log("Average score of the group:");
console.log(average);

let isPassing = average > 75;
//Log the value of the average in the console.
console.log("Average score of the group is greater than 75?");
console.log(isPassing);


//Do not modify
//For exporting to test.js
try{
    module.exports = {

        sum1: typeof sum1 !== 'undefined' ? sum1 : null,
        sum2: typeof sum2 !== 'undefined' ? sum2 : null,
        difference1: typeof difference1 !== 'undefined' ? difference1 : null,
        match: typeof match !== 'undefined' ? match : null,
        isCorrectLength: typeof isCorrectLength !== 'undefined' ? isCorrectLength : null,
        isDivisibleBySeven: typeof isDivisibleBySeven !== 'undefined' ? isDivisibleBySeven : null,
        product: typeof product !== 'undefined' ? product : null,
        quotient: typeof quotient !== 'undefined' ? quotient : null,
        modulo: typeof modulo !== 'undefined' ? modulo : null,
        resultFahrenheit: typeof resultFahrenheit !== 'undefined' ? resultFahrenheit : null,
        isDivisibleBy8: typeof isDivisibleBy8 !== 'undefined' ? isDivisibleBy8 : null,
        isDivisibleBy4: typeof isDivisibleBy4 !== 'undefined' ? isDivisibleBy4 : null,
        average: typeof average !== 'undefined' ? average : null,
        isPassing: typeof isPassing !== 'undefined' ? isPassing : null,

    }
} catch(err){

}