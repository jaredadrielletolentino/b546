/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Actvity #1: Create a database called "business" 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number
	- date - date (Lookup the use of Date())

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */
	async function insertSales(db){
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.insertMany([
			    {
			    	_id: 1,
			        product: "A",
			        quantity: 2,
			        category: "Electronics",
			        price: 100,
			        date: new Date ("2024-08-09T10:17:23.349Z")
			    },
			    {
			    	_id: 3,
			        product: "B",
			        quantity: 3,
			        category: "Clothing",
			        price: 50,
			        date: new Date ("2024-08-09T10:17:23.349Z")
			    },
			    {
			    	_id: 2,
			        product: "C",
			        quantity: 1,
			        category: "Electronics",
			        price: 200,
			        date: new Date ("2024-08-09T10:17:23.349Z")
			    }
			])
	
	
	
			
		);
	}
	async function insertCustomers(db){
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.customers.insertMany([
				{
					_id: 1,
				    name: "John",
				    age: 35,
				    gender: "Male",
				    region: "North"
				},
				{
					_id: 2,
				    name: "Alice",
				    age: 28,
				    gender: "Female",
				    region: "South"
				},
				{
					_id: 3,
				    name: "Bob",
				    age: 45,
				    gender: "Male",
				    region: "North"
				}
			])
			
	
	
			
		);
	}
	
	/* 
	3. Calculate total sales revenue for each product category using $group and $sum.
	*/
	async function totalRevenue(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			    {
			      $group: {
			        _id: "$category",
			        totalRevenue: {
			          $sum: { $multiply: ["$price", "$quantity"] }
			        }
			      }
			    }
			  ])
	
			
		);
	};
	
	/* 
	4. Calculate quantity per sales category using $group and $sum.
	*/
	async function quantityPerSales(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			    {
			      $match: {
			        category: { $in: ["Electronics", "Clothing"] } // Optional filtering
			      }
			    },
			    {
			      $group: {
			        _id: "$category",
			        totalQuantity: { $sum: "$quantity" }
			      }
			    }
			  ])
	
			
		);
	};
	
	/* 
	5. Count customers per region using $group and $count.
	*/
	async function customerPerRegion(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.customers.aggregate([
			    {
			      $group: {
			        _id: "$region",
			        customerCount: { $sum: 1 }
			      }
			    }
			  ])
	
			
		);
	};
	
	/* 
	6. Analyze customer demographics by age group using $match and $group.
	*/
	async function demographicsByAge(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.customers.aggregate([
			    {
			      $match: {
			        age: { $gte: 20, $lte: 40 }
			      }
			    },
			    {
			      $group: {
			        _id: null,
			        count: { $sum: 1 }
			      }
			    }
			  ])
	
			
		);
	};
	
	/* 
	7. Determine average order value using $group and $avg.
		- Look up the use of $avg operator.
	*/
	async function orderAverage(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			    {
			      $group: {
			        _id: null,
			        averageOrderValue: {
			          $avg: { $multiply: ["$price", "$quantity"] }
			        }
			      }
			    }
			  ])
	
			
		);
	};
	
	/* 
	8. Explore product popularity trends over time using $project, $group, and $sort.
		- Look up the use of $dateToString operator.
	*/
	async function productPopularity(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			                {$project: {product: 1, date: {$dateToString: {format: "%Y-%m", date: "$date" }}}},
			                {$group: {_id: {product: "$product", month: "$date"}, salesCount: {$sum: 1}}},
			                {$sort: {"_id.month": 1}}
			            ])
	
			
		);
	}
	
	
	/* 
	9. Identify outliers in sales data using $project, $match, and $sort.
		- Outliers are data points that are significantly different from the rest of the data.
		- Filter sales with price greater than 1000
		- You may add another document to the sales collection to test the outlier detection.
	*/
	async function salesOutlier(db) {
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			  { 
			    // Stage 1: $match to filter documents where quantity < 10
			    $match: { 
			      quantity: { $lt: 10 } 
			    } 
			  },
			  { 
			    // Stage 2: $group to count the number of matching documents
			    $group: { 
			      _id: null, 
			      count: { $sum: 1 } 
			    } 
			  }
			])
	
			
		);
	}
	
	/* 
		10. Count the number of sales document which quantity is less than 10 using $match, $group
			- Lookup and research on the use of query operators in $match
	*/
	async function quantityLessThan3(db){
	
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			  { 
			    $match: { 
			      quantity: { $lt: 3 } 
			    } 
			  },
			  { 
			    $group: { 
			      _id: null, 
			      salesQuantityLessThan3: { $sum: 1 } 
			    } 
			  }
			])
	
			
		);
	
	}
	/*
	
	11. Count the number of sales documents whose price is less than 100 using $match, $group
		- Lookup and research on the use of query operators in $match
	*/
	async function priceLessThan100(db){
	
		return await (

			// Add only query here. Make sure your query doesn't have a semicolon at the end.
			db.sales.aggregate([
			    {
			        $match: {
			            price: { $lt: 100 }
			        }
			    },
			    {
			        $group: {
			            _id: null,
			            salesPriceLessThan100: { $sum: 1 }
			        }
			    }
			])
	
	
			
		);
	
	}

	try{
		module.exports = {
			insertSales : typeof insertSales !== 'undefined' ? insertSales : null,
			insertCustomers : typeof insertCustomers !== 'undefined' ? insertCustomers : null,
			totalRevenue : typeof totalRevenue !== 'undefined' ? totalRevenue : null,
			quantityPerSales : typeof quantityPerSales !== 'undefined' ? quantityPerSales : null,
			customerPerRegion : typeof customerPerRegion !== 'undefined' ? customerPerRegion : null,
			demographicsByAge : typeof demographicsByAge !== 'undefined' ? demographicsByAge : null,
			orderAverage : typeof orderAverage !== 'undefined' ? orderAverage : null,
			productPopularity : typeof productPopularity !== 'undefined' ? productPopularity : null,
			salesOutlier : typeof salesOutlier !== 'undefined' ? salesOutlier : null,
			quantityLessThan3 : typeof quantityLessThan3 !== 'undefined' ? quantityLessThan3 : null,
			priceLessThan100 : typeof priceLessThan100 !== 'undefined' ? priceLessThan100 : null
		};
	} catch(err){
	
	};