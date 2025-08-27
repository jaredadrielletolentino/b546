//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../auth');

const Enrollment = require('../models/Enrollment.js');

const { errorHandler } = auth;

//[SECTION] Check if the email already exists

module.exports.checkEmailExists = (req, res) => {
    return User.find({ email : req.body.email })
    .then(result => {

        if (result.length > 0) {
            return res.status(409).send(true);
        } else {
            return res.status(404).send(false);
        };
    })
    .catch(error => errorHandler(error, req, res));
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
    .then((result) => res.send(result))
    .catch(error => errorHandler(error, req, res));
};

//[SECTION] User authentication
module.exports.loginUser = (req, res) => {
    return User.findOne({ email : req.body.email })
    .then(result => {
        if(result == null){
            return res.send(false);
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
            if (isPasswordCorrect) {
                return res.send({ access : auth.createAccessToken(result)});
            } else {
                return res.send(false);
            }
        }
    })
    .catch(error => errorHandler(error, req, res));
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
        return res.status(200).send(user)
    })
    .catch(error => errorHandler(error, req, res));
};

// [SECTION] Controller for enrollment:
module.exports.enroll = (req, res) => {
    // console.log(req.user);
    // We need to add an early exit if the user is an admin.
    if(req.user.isAdmin) {
        return res.status(403).send(false);
    }

    // if false, the enroll controller will run
    // console.log(req.user.id);
    let newEnrollment = new Enrollment({
        userId : req.user.id,
        enrolledCourses : req.body.enrolledCourses,
        totalPrice : req.body.totalPrice
    })
    return newEnrollment.save()
    .then(enrolled => res.status(201).send(true))
    .catch(err => errorHandler(error, req, res));
}



