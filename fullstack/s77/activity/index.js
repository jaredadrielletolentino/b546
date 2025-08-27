// Question #1: Create a program that calculate the total order amount. 
// Input should be an array, if not an array, return undefined. 

//calculateTotalAmount([150,200,400,100]) Output: 850

function calculateTotalAmount(orderAmounts) {
	if(!Array.isArray(orderAmounts) || !orderAmounts.every(amount => !isNaN(amount) && isFinite(amount))){
	   return undefined;
	}
	
	let total = 0;

	orderAmounts.forEach(amount => {
		total += amount;
	});

	return total;
}

// console.log("Total Amount: " + calculateTotalAmount([150,200,400,100]));

// Question #2: Create a program that takes an array of blog post titles and a keyword. 
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

//filterTitlesByKeyword(["Java 101","Python 101","Javascript 101"],"java") Output: ["Java 101","Javascript 101"]

function filterTitlesByKeyword(titles, keyword) {
	if(!Array.isArray(titles) || !keyword || keyword.constructor !== String) {
		return undefined;
	}

	if(!titles.every(title => title && title.constructor === String)) {
		return undefined;
	}

	const filteredTitles = titles.filter(title => title.toLowerCase().includes(keyword.toLowerCase())
	);

	return filteredTitles.length === 0 ? "No matching titles found." : filteredTitles;
}

// console.log(filterTitlesByKeyword(["Java 101","Python 101","Javascript 101"],"java"));

// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

//formatUsernames(["miguel106","moonnight","biniFan101"]) Output: ["Java 101","Javascript 101"] Output ['User: Miguel106', 'User: Moonnight', 'User: BiniFan101']

function formatUsernames(usernames) {
	if(!Array.isArray(usernames) || !usernames.every(username => username && username.constructor === String)) {
		return undefined;
	}

	return usernames.map(username => "User: " + username.charAt(0).toUpperCase() + username.slice(1));
}

// console.log(formatUsernames(["miguel106","moonnight","biniFan101"]));

// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inpus are arrays and contain only integers, if not return undefined

//optimizeDeliverySchedule([2004,2005,2001],[1991,1992,1993]) Output: [1991, 1992, 1993, 2001, 2004, 2005]

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
	if (!Array.isArray(datesWarehouse1) || !Array.isArray(datesWarehouse2) || 
	    !datesWarehouse1.every(Number.isInteger) || !datesWarehouse2.every(Number.isInteger)) {
	    return undefined;
	}

	return datesWarehouse1.concat(datesWarehouse2).filter((date, index, arr) => arr.indexOf(date) === index).sort((a, b) => a - b);

}

// console.log(optimizeDeliverySchedule([2004,2005,2001],[1991,1992,1993]));

// Question #5: Develop a program that removes all scores that are below a certain threshold. 
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places. 
// If after filtering there are no scores left or the input is invalid, return undefined


//removeLowScoresAndCalculateAverage([91,85,72,73,75], 75) Output: 83.67

function removeLowScoresAndCalculateAverage(scores, threshold) {
	if (!Array.isArray(scores) || !scores.every(Number.isInteger) || !Number.isInteger(threshold)) {
	    return undefined;
	}

	const filteredScores = scores.filter(score => score >= threshold);

	if (filteredScores.length === 0) {
	    return undefined;
	}

	const average = filteredScores.reduce((sum, score) => sum + score, 0) / filteredScores.length;
	return Math.round(average * 100) / 100;
}

// console.log(removeLowScoresAndCalculateAverage([91,85,72,73,75], 75));

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
	module.exports = {

		calculateTotalAmount: typeof calculateTotalAmount !== 'undefined' ? calculateTotalAmount : null,
		filterTitlesByKeyword: typeof filterTitlesByKeyword !== 'undefined' ? filterTitlesByKeyword : null,
		formatUsernames: typeof formatUsernames !== 'undefined' ? formatUsernames : null,
		optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== 'undefined' ? optimizeDeliverySchedule : null,
		removeLowScoresAndCalculateAverage: typeof removeLowScoresAndCalculateAverage !== 'undefined' ? removeLowScoresAndCalculateAverage : null,
	}
} catch(err){

}


