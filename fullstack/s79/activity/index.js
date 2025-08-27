// Question #1: Given an array of objects where each object contains id and value properties, write a function to convert this array into an object where each id is a key, and the corresponding value is the value. Assume all ids are unique.

function arrayToObject(array) {
	return array.reduce((acc, { id, value }) => {
	    acc[id] = value;
	    return acc;
	}, {});
}

const arrayOfObjects = [
    { id: 'a1', value: 'Apple' },
    { id: 'b2', value: 'Banana' },
    { id: 'c3', value: 'Cherry' }
];

// Question #2: Develop a function that concatenates an array of strings using a given delimiter. The function should return a single string comprised of array elements joined by the delimiter.

function concatenateStrings(strings, delimiter) {
   	
   	if (!Array.isArray(strings)) return '';
   	
    if (typeof delimiter !== 'string') return '';
      
    if (strings.length === 0) return '';
      
    return strings.join(delimiter)
}

const strings = ['Hello', 'world', 'this', 'is', 'JavaScript'];

// Question #3: Create a program that searches through contacts by name. The search should be case-insensitive and partial matches should be returned.

function findContactsByName(contacts, searchString) {
    if(!Array.isArray(contacts) || typeof searchString !== 'string') {
        return [];
    }

    const lowerCasesearchString = searchString.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCasesearchString));
}

const officeContacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' },
    { id: 5, name: 'Ryan Howard', role: 'Temp' }
];

// Question #4: Create a program that adds a new contact, automatically assign a unique id to each new contact, ensuring that the id auto-increments based on the highest existing id in the contacts array.

function addContact(contacts, newContact) {
	if(!Array.isArray(contacts)) {
        return undefined;
    }

    let maxId = 0;
    for(let eachContact of contacts){
        if(eachContact.id > maxId) {
            maxId = eachContact.id
        }
    }

    let addContact = {
        id: maxId + 1,
        name: newContact.name,
        role: newContact.role
    }

    contacts.push(addContact);

    return contacts
}

let contacts = [
    { id: 1, name: 'Michael Scott', role: 'Regional Manager' },
    { id: 2, name: 'Dwight Schrute', role: 'Assistant to the Regional Manager' },
    { id: 3, name: 'Jim Halpert', role: 'Sales Representative' },
    { id: 4, name: 'Pam Beesly', role: 'Receptionist' }
];

//Question #5: Given the following specification, create a flowchart to demonstrate its logic. Save the image as a png and add it in your activity folder as solution5.

/* 

    Specification:

    Create a program that takes an array of numbers as input, validates the array to ensure it has at least one element, and checks if all numbers in the array are even. If the array is empty or contains non-numeric values, return an error message. Otherwise, return true if all numbers are even and false otherwise.

*/


// Exporting functions for testing (Do not modify)
try {
    module.exports = {
        arrayToObject,
        concatenateStrings,
        findContactsByName,
        addContact,
        contacts,
        arrayOfObjects,
        strings,
        officeContacts
    };
} catch(err) {
    // Error handling if needed
}