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
            return res.status(409).send(true);
        } else{
            //if not duplicate, save the course
            return newCourse.save()
            .then(result => res.status(201).send(result))
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
        if (result.length > 0){
            //if the course is active, return the course.
            return res.status(200).send(result);
        }
        else {
            //if there is no active courses, return 'No active courses found'.
            return res.status(200).send({ message: 'No active courses found' });
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
        if (course) {
            //if the course is found, return the course.
            return res.status(200).send(course);
        } else {
            //if the course is not found, return 'Course not found'.
            return res.status(404).send({ message: 'Course not found' });
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
    return Course.findByIdAndUpdate(req.params.courseId, updatedCourse)
    .then(course => {
        if (course) {
            //if the course is found, return the course and send a message 'Course updated successfully'.
            res.status(200).send({ success: true, message: 'Course updated successfully' });
        } else {
            //if the course is not found, return 'Course not found'.
            res.status(404).send({ message: 'Course not found' });
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
            if (course) {
                if (!course.isActive) {
                    //if the course isActive is already false, send a message 'Course already archived' and return the course.
                    return res.status(200).send({ 
                        message: 'Course already archived',
                        course: course
                        });
                }
                //if the course is successfully archived, return true and send a message 'Course archived successfully'.
                return res.status(200).send({ 
                            success: true, 
                            message: 'Course archived successfully'
                        });
            } else {
                //if the course is not found, return 'Course not found'
                return res.status(404).send({ message: 'Course not found' });
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
            if (course) {
                if (course.isActive) {
                    // if the course isActive is already true, send a message 'Course already activated', and return the course.
                    return res.status(200).send({ 
                        message: 'Course already activated', 
                        course: course
                    });
                }
                //if the course is successfully activated, return true and send a message 'Course activated successfully'.
                return res.status(200).send({
                    success: true,
                    message: 'Course activated successfully'
                });
            } else {
                // if the course is not found, return 'Course not found'
                return res.status(404).send({ message: 'Course not found' });
            }
        })
        .catch(error => errorHandler(error, req, res));
};

// Course Search by Price Range Feature
module.exports.searchCoursesByPrice = async (req, res) => {
    try {
        const { minPrice = 0, maxPrice = Infinity } = req.body;

        // Validate price range
        if (isNaN(minPrice) || isNaN(maxPrice)) {
            return res.status(400).send({ message: 'Price must be a number' });
        }

        const courses = await Course.find({
            isActive: true,
            price: { $gte: Number(minPrice), $lte: Number(maxPrice) }
        });

        res.status(200).send(courses);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

module.exports.searchCoursesByName = async (req, res) => {
    try {
        const { courseName } = req.body;
    
        // Use a regular expression to perform a case-insensitive search
        const courses = await Course.find({
        name: { $regex: courseName, $options: 'i' },
        isActive: true
        });
    
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};