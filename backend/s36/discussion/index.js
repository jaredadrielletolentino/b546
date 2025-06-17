// Inserting Documents
// Creating

// InsertOne():
	// used to insert a single document into a collection.
	// Syntax:
		// db.collectionName.insertOne({object/document});

// Example:
db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "87654321",
        email: "janedoe@gmail.com"
    },
    courses: [ "CSS", "Javascript", "Python" ],
    department: "none"
})

// Note: Be careful for the collection name.
/*db.userss.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "87654321",
        email: "janedoe@gmail.com"
    },
    courses: [ "CSS", "Javascript", "Python" ],
    department: "none"
})*/

// InsertMany()
	// used to insert multiple documents into our collection.
	// Syntax:
		// db.collectionName.insertMany([{object}, {object}, . . .])

// Example:
db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@gmail.com"
        },
        courses: [ "Python", "React", "PHP" ],
        department: "none"
    },
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@gmail.com"
        },
        courses: [ "React", "Laravel", "Sass" ],
        department: "none"
    }
])

// Reading/Finding/Retrieving Documents

// findOne()
	// if multiple documents match the criteria for finding a document only the first document that matches the search term/criteria will be returned
	// Syntax:
		// db.collectionName.findOne({field: value})

// Example:
db.users.findOne({firstName: "Stephen"})

db.users.findOne({firstName: "Neil"})

// find()
	// finding multiple documents
	// Syntax:
		// db.collectionName.find({criteria})

// Example:
db.users.find({department: "none"})

db.users.find({department: "none", age: 82})

// To get all the documents in our collection:
db.users.find()

// Updating Documents
// updateOne()
	// Update a single document
	// Syntax:
		// db.collectionName.updateOne({criteria}, {$set: {fields}})

// Creating a document to update
db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "00000000",
        email: "test@gmail.com"
    },
    courses: [],
    department: "none"
})

// Example:
db.users.updateOne({firstName: "Test"}, {
	$set:
		{
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "12345678",
                email: "bill@gmail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: "Operations",
            status: "active"
        }
})

// updateMany()
	// db.collectionName.updateMany({criteria}, {$set: {fields}})

// Example:
db.users.updateMany({department: "none"}, {
	$set: {
		department: "HR"
	}
})

// Comparison Operators:

// Greater Than / Greater Than or Equal Operator:
	// Syntax:
		// db.collectionName.find({field: {$gt: value}})
		// db.collectionName.find({field: {$gte: value}})

// Example:
db.users.find({age: {$gt: 65}})

db.users.find({age: {$gte: 65}})

// Less Than / Less Than or Equal to Operator:
	// Syntax:
		// db.collectionName.find({field: {$lt: value}})
		// db.collectionName.find({field: {$lte: value}})

// Example:
db.users.find({age: {$lt: 65}})

db.users.find({age: {$lte: 65}})

// Not Equal Operator
	// Syntax:
		// db.collectionName.find({field: {$ne: value}})

// Example:
db.users.find({age: {$ne: 82}})

// In Operator
	// Allows us to find documents with specific match criteria field using different values
	// Syntax:
		// db.collectionName.find({field: {$in: [arrayOfValues]}})

// Example:
db.users.find({lastName: {$in: ["Hawking","Doe"]}})

// Logical Query Operator
// OR Operator
	// Allows us to find documents that match one or more of the specified criteria
	// Syntax:
		// db.collectionName.find({$or: [{criteria1}, {criteria2}]})

// Example:
db.users.find({ $or : [{firstName: "Neil"}, {age: 25}]})

// Field Projection

// Inclusion
	// Syntax:
		// db.users.find({criteria}, {field: 1})
db.users.find({firstName: "Jane"},
		{
			firstName: 1,
			lastName : 1,
			"contact.email": 1
			_id: 0
		}
	)

db.users.find({firstName: "Jane"},
		{
			firstName: 1,
			lastName : 1,
			contact: 1
		}
	)

// Exclusion
	// Syntax:
		// db.collectionName.find({criteria}, {field: 1})

// Example:
db.users.find( 
    { 
        firstName: "Jane" 
    }, 
    { 
        contact: 0, 
        department: 0 
    } 
)

// Regex Operator
	// Allows us to find documents that match a regular expression

	// Syntax:
		// db.collectionName.find({ field: $regex: 'pattern', $options: 'optionValue' })

// Example:
db.users.find({ firstName: { $regex: 'N', $options: 'i' } })