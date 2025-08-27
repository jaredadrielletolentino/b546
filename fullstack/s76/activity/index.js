// Question #1: Create a program to check if a given string is a palindrome or not. 
// Add validation, if the argument is not a string, return undefined. 
// Palindrome words should be 3 characters and up.

//isPalindrome("level") Output: true
//isPalindrome("cat") Output: false


function isPalindrome(string) {
	   if (typeof string !== 'string') {
	       return undefined;
	   }
	   
	   if (string.length < 3) {
	       return false;
	   }
	   
	   const reversed = string.split('').reverse().join('');
	   
	   return reversed === string;
}

// Question #2: Create a program that checks an isogram. 
// An isogram is a word where there are no repeating letters.
// The function should disregard text casing before doing anything else.
// If the function finds a repeating letter, return false. Otherwise, return true.

//isIsogram("background") Output: true
//isIsogram("ball") Output: false

function isIsogram(text) {
  	const lowerCaseText = text.toLowerCase();
  	const charCounts = {};

  	for (let i = 0; i < lowerCaseText.length; i++) {
    	const char = lowerCaseText[i];
    	if (charCounts[char]) {
      		return false;
    	}
    	charCounts[char] = 1;
  	}
  	return true;
}

// Question #3: Create a program to determine if a given year is a leap year. 
// The program should check if the input is a positive integer representing a year. If the input is not a valid year (i.e., not a positive integer), the program should return undefined.

//isLeapYear(2000) Output: true
//isLeapYear(1900) Output: false

function isLeapYear(year) {
	if (typeof year !== 'number' || year % 1 || year <= 0) {
        return undefined;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
      }

      return false;
}

// Question #4: Create a program that checks the age to give the proper price 
// Return undefined for people aged below 13.
// Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
// Return the rounded off price for people aged 22 to 64.
// The returned value should be a string.

//purchase(65, 100) Output: 80.00
//purchase(23, 100) Output: 100.00
//purchase(13, 100) Output: undefined

function purchase(age, price) {
	if (age < 13) {
	    return undefined;
	}

	if ((age >= 13 && age <= 21) || age >= 65) {
	    const discountedPrice = price * 0.8;
	    return discountedPrice.toFixed(2);
	}
	   
	if (age >= 22 && age <= 64) {
	    return price.toFixed(2);
	}
}

// Question #5: Develop a program that calculates the frequency of a specific letter's appearance within a given sentence.
// Check first whether the letter is a single character.
// If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
// If letter is invalid, return undefined.

//countLetter("l","Hello, World!") Output: 3
//countLetter("la","Hello, World!") Output: undefined

function countLetter(letter, sentence) {
	if (typeof letter !== 'string' || letter.length !== 1) {
	    return undefined;
	}

	let count = 0;
	for (let i = 0; i < sentence.length; i++) {
	    if (sentence[i] === letter) {
	        count++;
	    }
	}
	
	return count;
}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		isPalindrome: typeof isPalindrome !== 'undefined' ? isPalindrome : null,
		isIsogram: typeof isIsogram !== 'undefined' ? isIsogram : null,
		isLeapYear: typeof isLeapYear !== 'undefined' ? isLeapYear : null,
		purchase: typeof purchase !== 'undefined' ? purchase : null,
		countLetter: typeof countLetter !== 'undefined' ? countLetter : null,
	}
} catch(err){

}