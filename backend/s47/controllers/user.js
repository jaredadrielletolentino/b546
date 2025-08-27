//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Enrollment = require("../models/Enrollment");
const auth = require('../auth');

const { errorHandler } = auth;

//[SECTION] Check if the email already exists

module.exports.checkEmailExists = (req, res) => {

    // To add a validator to check if the string provided is email or not
    if(req.body.email.includes("@")) {

    return User.find({ email : req.body.email })
    .then(result => {

        if (result.length > 0) {
            return res.status(409).send(true);
        } else {
            return res.status(404).send(false);
        };
    })
    .catch(error => errorHandler(error, req, res));

    } else {
        return res.status(400).send(false);
    }
};


//[SECTION] User registration
module.exports.registerUser = (req, res) => {
    let newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        mobileNo : req.body.mobileNo,
        password : bcrypt.hashSync(req.body.password, 10)
    })

    return newUser.save()
    .then((result) => res.status(201).send(result))
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] User authentication
module.exports.loginUser = (req, res) => {

    if(req.body.email.includes("@")) {

        return User.findOne({ email : req.body.email })
        .then(result => {
            if(result == null){
                return res.status(404).send(false);
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    return res.status(200).send({ access : auth.createAccessToken(result)});
                } else {
                    return res.status(401).send(false);
                }
            }
        })
        .catch(error => errorHandler(error, req, res));
    } else {
        return res.status(400).send(false);
    }
};


//[Section] Activity: Retrieve user details
/*
    Steps:
    1. Retrieve the user document using it's id
    2. Change the password to an empty string to hide the password
    3. Return the updated user record
*/
module.exports.getProfile = (req, res) => {

    return User.findById(req.user.id)
    .then(user => {
        user.password = "";
        res.status(200).send(user)
    })
    .catch(error => errorHandler(error, req, res));
};


module.exports.enroll = (req, res) => {

    // The user's id from the decoded token after verify()
    console.log(req.user.id);
    // The course from our request body
    console.log(req.body.enrolledCourses) ;

    // Process stops here and sends response IF user is an admin
    if(req.user.isAdmin){
        // Admins should not be allowed to enroll to a course, so we need the "verify" to check the req.user.isAdmin
        return res.status(403).send(false);
    }

    let newEnrollment = new Enrollment ({
        // Adds the id of the logged in user from the decoded token
        userId : req.user.id,
        // Gets the courseIds from the request body
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    })

    return newEnrollment.save()
    .then(enrolled => {
        return res.status(201).send(true);
    })
    .catch(error => errorHandler(error, req, res));
    
}



module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                return res.status(200).send(enrollments);
            }
            return res.status(404).send(false);
        })
        .catch(error => errorHandler(error, req, res));
};