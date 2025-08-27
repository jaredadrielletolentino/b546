// Question #1: Add a new book with the following properties:
// Automatic unique ID assignment
// Title and author should be a string
// Year should be a positive number
// isAvailable defaults to true

//addBook(library,newBook) Output: true

const library = [
    { id: 1, title: '1984', author: 'George Orwell', year: 1949, isAvailable: true },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isAvailable: false }
];
const newBook = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 };

function addBook(library, newBook) {
    if (typeof newBook.title !== 'string' || typeof newBook.author !== 'string' || typeof newBook.year !== 'number' || newBook.year <= 0) {
        return false;
    }

    const maxId = library.length > 0 ? Math.max(...library.map(book => book.id)) : 0;
    const bookToAdd = { ...newBook, id: maxId + 1, isAvailable: true };
    
    library.push(bookToAdd);
    return true;
}

// Question #2: Retrieve either details of a specific book by its ID or an array of details for all books, optionally filtered by availability. 

//getBooks(library,1)
//Output:
/* 

    {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "year": 1949,
        "isAvailable": true
    }

*/

function getBooks(library, id = null, filterAvailable = null) {
    if (id !== null) {
        const book = library.find(bookIsAvailable => bookIsAvailable.id === id);
        return book || null;
    }
    if (filterAvailable !== null) {
        return library.filter(bookIsAvailable => bookIsAvailable.isAvailable === filterAvailable);
    }
    return library;
}

// Question #3: Update a book's availability isAvailable after validating the book exists and ensuring the new isAvailable differs from the current.

//updateBookAvailability(library,1,false) Output: true
//updateBookAvailability(library,1,true) Output: true
//updateBookAvailability(library,4,false) Output: `book not found`

function updateBookAvailability(library, id, isAvailable) {
    const book = library.find(bookIsAvailable => bookIsAvailable.id === id);
    
    if (!book) {
        return 'book not found';
    }
    
    if (book.isAvailable === isAvailable) {
        return false;
    }
    
    book.isAvailable = isAvailable;
    return true;
}

// Question #4: Remove a book by its ID only if it is marked as unavailable.

//removeBook(library,2) Output: true
//removeBook(library,1) Output: "Book must be unavailable to be removed."

function removeBook(library, id) {
    if (!library || !Array.isArray(library)) {
        return 'book not found';
    }
    
    const bookIndex = library.findIndex(book => book && book.id === id);
    
    if (bookIndex === -1) {
        return 'book not found';
    }
    
    const book = library[bookIndex];
    if (!book) {
        return 'book not found';
    }
    
    if (book.isAvailable) {
        return 'Book must be unavailable to be removed.';
    }
    
    library.splice(bookIndex, 1);
    return true;
}

// Question #5: List all books, with an option to filter by their availability isAvailable.

function listBooks(library, filterAvailable = null) {
    if (filterAvailable !== null && typeof filterAvailable !== 'boolean') {
        return [];
    }
    
    if (filterAvailable !== null) {
        return library.filter(book => book.isAvailable === filterAvailable);
    }
    
    return library;     
}

//Flowchart Interview Questions

// Question #6 Given the following code, create the appropriate Flowchart.
// You can use draw.io and save the png into the activity folder.

function determineGrade(score) {
    // Input score as parameter
    if (typeof score !== 'number') {
        // Return "invalid input" if score is not a number
        return "invalid input";
    }

    // Check if score is within valid range
    if (score < 0 || score > 100) {
        // Return "invalid score" if score is outside the range 0-100
        return "invalid score";
    }

    // Determine grade based on score
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Return the grade
    return grade;
}

try{
    module.exports = {

        addBook: typeof addBook !== 'undefined' ? addBook : null,
        getBooks: typeof getBooks !== 'undefined' ? getBooks : null,
        updateBookAvailability: typeof updateBookAvailability !== 'undefined' ? updateBookAvailability : null,
        removeBook: typeof removeBook !== 'undefined' ? removeBook : null,
        listBooks: typeof listBooks !== 'undefined' ? listBooks : null,

    }

} catch(err){

}