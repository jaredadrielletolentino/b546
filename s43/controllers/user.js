//[SECTION] Dependencies and Modules
const User = require('../models/User');
const auth = require('../auth.js');

// This is bcrypt - It is one of the many packages that we can use to encrypt information but is not commonly recommended because of how simple the algo is for creating encrypted passwords which have been decoded by hackers.
const bcrypt = require("bcrypt");

//[SECTION] User Registration
module.exports.registerUser = (reqBody) => {

    let newUser = new User({
        firstName : reqBody.firstName,
        lastName : reqBody.lastName,
        email : reqBody.email,
        mobileNo : reqBody.mobileNo,
        password : bcrypt.hashSync(reqBody.password, 10)
    })

    return newUser.save()
    .then((result) => result)
    .catch(err => err)

};


//[SECTION] User Login
/*
    Steps:
    1. Check the database if the user email exists
    2. Compare the password provided in the login form with the password stored in the database
    3. Generate/return a JSON web token if the user is successfully logged in and return false if not
*/
module.exports.loginUser = (reqBody) => {
    return User.findOne({email : reqBody.email}).then(result => {
        // console.log(result);
        if(result === null) {
            return false
        } 
        // if the email exists in the db.
        else {
            // result.password === reqBody.password

            let isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

            if(isPasswordCorrect) {
                // Generate Token
                return {access : auth.createAccessToken(result)}
            } else {
                return false;
            }
        }
    })
}

module.exports.getProfile = (reqBody) => {

    return User.findById(reqBody.id)
    .then(result => result)
    .catch(err => err)

};


