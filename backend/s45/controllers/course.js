//[SECTION] Activity: Dependencies and Modules
const Course = require("../models/Course");
const { errorHandler } = require("../auth.js");
//[SECTION] Activity: Create a course
/*
    Steps: 
    1. Instantiate a new object using the Course model and the request body data
    2. Save the record in the database using the mongoose method "save"
    3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method
*/
module.exports.addCourse = (req, res) => {

    // Creates a variable "newCourse" and instantiates a new "Course" object using the mongoose model
    // Uses the information from the request body to provide all the necessary information
    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    // Saves the created object to our database
/*    return newCourse.save()
    .then(result => res.send(result))
    // Error Logging
    .catch(err => {
        console.error("Error occured while saving the course:", err);

        return res.status(500).send({
            message: "An error occured while saving the course.",
            errorCode: 'COURSE_SAVE_ERROR'
        })
    })*/

    // Use of error handler middleware
    return newCourse.save()
    .then(result => res.send(result))
    .catch(err => errorHandler(err, req, res));
}; 


//[SECTION] Activity: Retrieve all courses
module.exports.getAllCourses = (req, res) => {

    return Course.find({})
    .then(result => res.send(result))
    .catch(err => err)

};

//[SECTION] Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive: true })
    .then(result => res.send(result))
    .catch(err => err);

};

//[SECTION] Retrieve a specific course
/*
    Steps: 
    1. Retrieve a course using the mongoose "findById" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getCourse = (req, res) => {

    Course.findById(req.params.id)
    .then(course => res.send(course))
    .catch(err => errorHandler(err, req, res));
    
};