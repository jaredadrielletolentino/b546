//[SECTION] Activity: Dependencies and Modules
const Course = require("../models/Course");
const { errorHandler } = require('../auth');

//[SECTION] Activity: Create a course
/*
    Steps: 
    1. Instantiate a new object using the Course model and the request body data
    2. Save the record in the database using the mongoose method "save"
    3. Use the "then" method to send a response back to the client appliction based on the result of the "save" method
*/
module.exports.addCourse = (req, res) => {

    let newCourse = new Course({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    //[SECTION] Activity: Validate if course already exists
    //Check if course exists using the findOne() method
    Course.findOne({ name: req.body.name })
    .then(existingCourse => {
        //if existing course return true
        if (existingCourse) {
            // This is were we implement the informational response.
            // Direct string will only cause an error when connecting it to your frontend.
            return res.status(409).send({message: "Course already exists"});
        } else{
            // Response body, is a JSON object containing key-value pairs:
                // -success: true - sending a boolean value of true indicates that the course was added successfully
                // -message - a descriptive message indicating that the course was added successfully. This provides clear feedback to the client about the outcome of their request
                // -result - additional details about the newly created course. Including the result of the creation operation in the response allows the client to immediately access information about the newly created resource without needing to make an additional request.
            //if not duplicate, save the course
            return newCourse.save()
            .then(result => res.status(201).send({
                success: true, 
                message: "Course added successfully",
                result: result
            }))
            .catch(error => errorHandler(error, req, res));
        }
    }).catch(error => errorHandler(error, req, res));
};


//[SECTION] Activity: Retrieve all courses
module.exports.getAllCourses = (req, res) => {
    return Course.find({})
    .then(result => {
        // if the result is not null send status 30 and its result
        if(result.length > 0){
            return res.status(200).send(result);
        }
        else{
            // 404 for not found courses
            return res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] Retrieve all active courses
/*
    Steps: 
    1. Retrieve all courses using the mongoose "find" method with the "isActive" field values equal to "true"
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getAllActive = (req, res) => {

    Course.find({ isActive : true }).then(result => {
        // if the result is not null
        if (result.length > 0){
            // send the result as a response
            return res.status(200).send(result);
        }
        // if there are no results found
        else {
            // send the message as the response
            return res.status(404).send({
                message : "No courses found"
            })
        }
    }).catch(err => res.status(500).send(err));

};

//[SECTION] Retrieve a specific course
/*
    Steps: 
    1. Retrieve a course using the mongoose "findById" method
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.getCourse = (req, res) => {
    Course.findById(req.params.courseId)
    .then(course => {
        if(course) {
            return res.status(200).send(course);
        } else {
            return res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res)); 
};


module.exports.updateCourse = (req, res)=>{

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }

    // findByIdandUpdate() finds the the document in the db and updates it automatically
    // req.body is used to retrieve data from the request body, commonly through form submission
    // req.params is used to retrieve data from the request parameters or the url
    // req.params.courseId - the id used as the reference to find the document in the db retrieved from the url
    // updatedCourse - the updates to be made in the document
    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            res.status(200).send(true);
        } else {
            res.status(404).send(false);
        }
    })
    .catch(error => errorHandler(error, req, res));
};

module.exports.archiveCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: false
    };

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            // Check if a course was found
            if (course) {
                // If course found, check if it was already archived
                if (!course.isActive) {
                    // If course already archived, return a 200 status with a message indicating "Course already archived".
                    return res.status(200).send('Course already archived');
                }
                // If course not archived, return a 200 status with a boolean true.
                return res.status(200).send(true);
            } else {
                // If course not found, return a 404 status with a boolean false.
                return res.status(404).send(false);
            }
        })
        .catch(error => errorHandler(error, req, res));
};

module.exports.activateCourse = (req, res) => {
  
    let updateActiveField = {
        isActive: true
    }

    Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
        .then(course => {
            // Check if a course was found
            if (course) {
                // If course found, check if it was already activated
                if (course.isActive) {
                    // If course already activated, return a 200 status with a message indicating "Course already activated".
                    return res.status(200).send('Course already activated');
                }
                // If course not yet activated, return a 200 status with a boolean true.
                return res.status(200).send(true);
            } else {
                // If course not found, return a 404 status with a boolean false.
                return res.status(404).send(false);
            }
        })
        .catch(error => errorHandler(error, req, res));
};
