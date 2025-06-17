// S36 - MongoDB - CRUD, Query Operators, and Field Projection Activity Template:
/* 
1. Create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.
2. Create a new database called hotel (MongoDB Compass)
*/

/*

    Sample solution:

    async function addOneQuery(db) {
        await (

            //add query here

            db.collectionName.insertOne({
                field1: "value1",
                field2: "value2" 
            }) //DO NOT ADD SEMICOLON.

        );

        return(db);
    }

Note: 
    - Do note change the functionName or modify the exports
    - Do not add semicolon after query
*/

/*
3. In the addOneFunc(), copy and paste your query to insert a single room (insertOne method) in the rooms collection with the following details:
    - name - single
    - accommodates - 2
    - price - 1000
    - description - A simple room with all the basic necessities
    - rooms_available - 10
    - isAvailable - true
*/
async function addOneFunc(db) {
    await (
         // Add only query here. Make sure your query doesn't have a semicolon at the end.
         db.rooms.insertOne({
             name: "single",
             accommodates: 2,
             price: 1000,
             description: "A simple room with all the basic necessities",
             rooms_available: 10,
             isAvailable: true
         })
    );

    return(db);

 };

 /* 
 4. In the addManyFunc(), copy and paste your query to insert multiple rooms (insertMany method)  in the rooms collection with the following details:
     i.
     - name - double
     - accommodates - 3
     - price - 2000
     - description - A room fit for a small family going on a vacation
     - rooms_available - 5
     - isAvailable - true
     ii.
     -  name - queen
     -  accommodates - 4
     -  price - 4000
     -  description - A room with a queen sized bed perfect for a simple getaway
     -  rooms_available - 15
     -  isAvailable - true
     iii.
     -  name - executive suites
     -  accommodates - 4
     -  price - 9000
     -  description - A room designed with more space for work and relaxation
     -  rooms_available - 2
     -  isAvailable - true
     iv.
     -  name - deluxe king
     -  accommodates - 4
     -  price - 7000
     -  description - A room with a king-sized bed and a comfortable couch for the modern traveler.
     -  rooms_available - 4
     -  isAvailable - true
 */
 async function addManyFunc(db) {

    await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.insertMany([
            {
                name: "double",
                accommodates: 3,
                price: 2000,
                description: "A room fit for a small family going on a vacation",
                rooms_available: 5,
                isAvailable: true
            },
            {
                name: "queen",
                accommodates: 4,
                price: 4000,
                description: "A room with a queen sized bed perfect for a simple getaway",
                rooms_available: 15,
                isAvailable: true
            },
            {
                name: "executive suites",
                accommodates: 4,
                price: 9000,
                description: "A room designed with more space for work and relaxation",
                rooms_available: 2,
                isAvailable: true
            },
            {
                name: "deluxe king",
                accommodates: 4,
                price: 7000,
                description: "A room with a king-sized bed and a comfortable couch for the modern traveler.",
                rooms_available: 4,
                isAvailable: true
            }
        ])


        
    );

   //Don't add any codes here
   return(db);

 };

 /* 
 5. In the findRoom(), copy and paste your query to use the findOne method to search for a room with the name double.
 */
 async function findRoom(db) {
    return await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.findOne({name: "double"})


        
    );
 };

 /* 
 6. In the updateOneFunc(), copy and paste your query to use the updateOne method to update the queen room and set the available rooms to 0.
     - Look up the use and syntax of updateOne method
     - Look up the use and syntax of $set operator
 */
 function updateOneFunc(db) {

     // Add only query here. Make sure your query doesn't have a semicolon at the end.
     db.rooms.updateOne({rooms_available: 15}, {
        $set:
        {
            rooms_available: 0
        }
    })
 };

 /* 
 7. In the replaceOneFunc(), copy and paste your query to use the replaceOne method to replace the whole queen room document.
     - Look up the use and syntax of replaceOne method
 */
 async function replaceOneFunc(db) {
    await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.replaceOne({name: "queen"},
            {
                name: "family",
                accommodates: 8,
                price: 10000,
                description: "A room with a king sized bed perfect for a couple or married",
                rooms_available: 2,
                isAvailable: true
            }

        )
        
    );
 }

 /* 
 8. In the findOneAndUpdateFunc(), copy and paste your query to use the findOneAndUpdate method to update the family room's availability property to false.
     - Look up the use and syntax of findOneAndUpdate method
     - Look up the use and syntax of $set operator
 */
 async function findOneAndUpdateFunc(db) {
    await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.findOneAndUpdate({name: "family"},{$set: {isAvailable: false}})


        
    );

    //Don't add any codes here
    return (db)
 }

 /* 
 9. In the deleteOneFunc(), copy and paste your query to use the deleteOne method to delete the executive suites room.
     - Look up the use and syntax of deleteOne method
 */
 async function deleteOneFunc(db) {

    await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.deleteOne(
          { name: "executive suites" }
        )


        
    );

 }

 /* 
 10. In the deleteManyFunc(), copy and paste your query to use the deleteMany method to delete all rooms that have 0 rooms available.
     - Look up the use and syntax of deleteMany method
 */
 function deleteManyFunc(db) {

         // Add only query here. Make sure your query doesn't have a semicolon at the end.
         db.rooms.deleteMany(
           { rooms_available: 0 }
         )

 };

 /* 
 11. In the findOneAndDeleteFunc(), copy and paste your query to use the findOneAndDelete method to delete a room with the name single.
     - Look up the use and syntax of findOneAndDelete method
 */
 async function findOneAndDeleteFunc(db) {

    return await (

         // Add only query here. Make sure your query doesn't have a semicolon at the end.
         db.rooms.findOneAndDelete(
           { name: "single" }
         )

    );

 }

 /* 
 12. In the findName(), copy and paste your query  to find rooms with letter s in their name or t.
     - Use the $or operator.
     - Show only the name, and description fields and hide the _id field.
 */
 async function findName(db) {

     return await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.find(
          {
            $or: [
              { name: /s/i },
              { name: /t/i }
            ]
          },
          {
            _id: 0,
            name: 1,
            description: 1
          }
        )


        
    );

 };

 /* 
 13. In the findAccom(), copy and paste your query to find rooms who accommodates more than 2, with price of less than or equal to 7000.
     - Use the $and operator
 */
 async function findAccom(db) {

    return await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.find(
          {
            $and: [
              { accommodates: { $gt: 2 } },
              { price: { $lte: 7000 } }
            ]
          }
        )


        
    );

 };

 /* 
 14. In the findNamePrice(), copy and paste your query to find rooms with the letter d in their name and has price of greater than or equal to 2000.
     - Use the $and, $regex and $gte operators.
     - Show only the name, and price fields and hide the _id field.

 */
 async function findNamePrice(db) {

    return await (

        // Add only query here. Make sure your query doesn't have a semicolon at the end.
        db.rooms.find(
          {
            $and: [
              { name: { $regex: /d/i } },
              { price: { $gte: 2000 } }
            ]
          },
          {
            _id: 0,
            name: 1,
            price: 1
          }
        )


        
    );
    
 };

 try{
     module.exports = {
        embeddedFind : typeof embeddedFind !== 'undefined' ? embeddedFind : null,
        nestedFind : typeof nestedFind !== 'undefined' ? nestedFind : null,
        findExact : typeof findExact !== 'undefined' ? findExact : null,
        findRandom : typeof findRandom !== 'undefined' ? findRandom : null,
        insertArray : typeof insertArray !== 'undefined' ? insertArray : null,
        addOneFunc : typeof addOneFunc !== 'undefined' ? addOneFunc : null,
        addManyFunc : typeof addManyFunc !== 'undefined' ? addManyFunc : null,
        updateOneFunc : typeof updateOneFunc !== 'undefined' ? updateOneFunc : null,
        findRoom : typeof findRoom !== 'undefined' ? findRoom : null,
        deleteManyFunc : typeof deleteManyFunc !== 'undefined' ? deleteManyFunc : null,
        findName : typeof findName !== 'undefined' ? findName : null,
        findAccom : typeof findAccom !== 'undefined' ? findAccom : null,
        findNamePrice : typeof findNamePrice !== 'undefined' ? findNamePrice : null,
        replaceOneFunc : typeof replaceOneFunc !== 'undefined' ? replaceOneFunc : null,
        findOneAndUpdateFunc : typeof findOneAndUpdateFunc !== 'undefined' ? findOneAndUpdateFunc : null,
        deleteOneFunc : typeof deleteOneFunc !== 'undefined' ? deleteOneFunc : null,
        findOneAndDeleteFunc : typeof findOneAndDeleteFunc !== 'undefined' ? findOneAndDeleteFunc : null
     };
 } catch(err){

 };