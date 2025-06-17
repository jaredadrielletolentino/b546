// Documents for the Discussion.

// Create documents to use for the discussion
db.fruits.insertMany([
    {
        name : "Apple",
        color : "Red",
        stock : 20,
        price: 40,
        supplier_id : 1,
        onSale : true,
        origin: [ "Philippines", "US" ]
    },

    {
        name : "Banana",
        color : "Yellow",
        stock : 15,
        price: 20,
        supplier_id : 2,
        onSale : true,
        origin: [ "Philippines", "Ecuador" ]
    },

    {
        name : "Kiwi",
        color : "Green",
        stock : 25,
        price: 50,
        supplier_id : 1,
        onSale : true,
        origin: [ "US", "China" ]
    },

    {
        name : "Mango",
        color : "Yellow",
        stock : 10,
        price: 120,
        supplier_id : 2,
        onSale : false,
        origin: [ "Philippines", "India" ]
    }
])

// MongoDB Aggregation
	// Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data.
	// Compared to doing CRUD operations on our data from previous session, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decisions without having to create frontend application.
	// There is no limit to the number of stages you can include in a MongoDB aggregation pipeline.
	// You can add as many stages as necessary for your use case. However, keep in mind that performance could be affected if the pipeline becomes overly complex or if the dataset is too large.


// Using the Aggregate method
// $match operator
	// The $match operator is used to pass the document that meet the specified condition(s) to the next Pipeline stage/aggregation process.
		// Syntax:
			// {$match : {field : value}}

// $group operator
	// The $group is used to group elements together and field-value pairs using the data from the grouped elements.
	// Syntax:
		// {$group : {_id : "value", field : "valueResult"}}

// $match + $group operator
	// Syntax:
		// db.collectionName.aggregate([{$match : {field : value}}, {$group : {_id : "value", field : "valueResult"}} ])

// $sum operator
	// The sum operator will get the total values of provided field in the returned document that are found using the match criteria.

// We want to count the stocks of the fruits that are currently on sale per supplier
db.fruits.aggregate([{$match : {onSale : true}}, {$group : {_id : "$supplier_id", total: {$sum : "$stock"}}}])

// Field Projection with aggregation
	// $project can be used when aggregating data to include/exclude fields from the returned results.
	// Syntax:
		// {$project : {field: 1/0}}

db.fruits.aggregate([
	{$match : {onSale : true}}, 
	{$group : {_id : "$supplier_id", total: {$sum : "$stock"}}},
	{$project : {_id: 0}}
	])

// Aggregating results based on array fields
	// the $unwind deconstruct an array field from a collection or field with an array value to output a result for each element.
	// Syntax:
		// {$unwind: field}

db.fruits.aggregate([
	{$unwind: "$origin"},
	{$group: {_id : "$origin", numberFruitsExported : {$sum : 1}}}
	])