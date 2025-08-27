//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../auth');


//[SECTION] Check if the email already exists

module.exports.checkEmailExists = (req, res) => {
    return User.find({ email : req.body.email })
    .then(result => {

        if (result.length > 0) {
            return res.send(true);
        } else {
            return res.send(false);
        };
    })
    .catch(err => err);
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
    .catch(err => err)
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
    .catch(err => err);
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
        result.password = "";
        res.send(user)
    })
    .catch(err => err)
};



