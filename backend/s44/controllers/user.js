//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../auth');


//[SECTION] Check if the email already exists
/*
    Steps: 
    1. Use mongoose "find" method to find duplicate emails
    2. Use the "then" method to send a response back to the client appliction based on the result of the "find" method
*/
module.exports.checkEmailExists = (reqBody) => {

    // The result is sent back to the client via the "then" method found in the route file
    return User.find({ email : reqBody.email })
    .then(result => {

        // The "find" method returns a record if a match is found
        if (result.length > 0) {

            return true;

        // No duplicate email found
        // The user is not yet registered in the database
        } else {

            return false;
        };
    })
    .catch(err => err)
};

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
module.exports.loginUser = (reqBody) => {
    return User.findOne({ email: reqBody.email })
    .then(result => {
        if(result == null) {
            return false;
        } else {
            const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);

            if (isPasswordCorrect) {
                return { access: auth.createAccessToken(result) }
            } else {
                return false;
            }
        }
    })
    .catch(err => err);
}

// GetProfile
module.exports.getProfile = (userID) => {

    return User.findById(userID)
    .then(result => result)
    .catch(err => err)

};




