//[SECTION] Dependencies and Modules
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Enrollment = require("../models/Enrollment");
const auth = require('../auth');

const { errorHandler } = auth;

//[SECTION] Check if the email already exists

module.exports.checkEmailExists = (req, res) => {

    if(req.body.email.includes("@")){
        return User.find({ email : req.body.email })
        .then(result => {

            if (result.length > 0) {
                return res.status(409).send(true);
            } else {
                return res.status(404).send(false);
            };
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        res.status(400).send(false)
    }
};


//[SECTION] User registration

module.exports.registerUser = (req, res) => {

    // Checks if the email is in the right format
    if (!req.body.email.includes("@")){
        // if the email is not in the right format, send a message 'Invalid email format'.
        return res.status(400).send({ message: 'Invalid email format' });
    }
    // Checks if the mobile number has the correct number of characters
    else if (req.body.mobileNo.length !== 11){
        // if the mobile number is not in the correct number of characters, send a message 'Mobile number is invalid'.
        return res.status(400).send({ message: 'Mobile number is invalid' });
    }
    // Checks if the password has atleast 8 characters
    else if (req.body.password.length < 8) {
        // If the password is not atleast 8 characters, send a message 'Password must be atleast 8 characters long'.
        return res.status(400).send({ message: 'Password must be atleast 8 characters long' });
    // If all needed requirements are achieved
    } else {
        let newUser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            mobileNo : req.body.mobileNo,
            password : bcrypt.hashSync(req.body.password, 10)
        })

        return newUser.save()
        // if all needed requirements are achieved, send a success message 'User registered successfully' and return the newly created user.
        .then((result) => res.status(201).send({
            message: 'User registered successfully',
            user: result
        }))
        .catch(error => errorHandler(error, req, res));
    }
};

//[SECTION] User authentication
module.exports.loginUser = (req, res) => {

    if(req.body.email.includes("@")){
        return User.findOne({ email : req.body.email })
        .then(result => {
            if(result == null){
                // if the email is not found, send a message 'No email found'.
                return res.status(404).send({ message: 'No email found' });
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    // if all needed requirements are achieved, send a success message 'User logged in successfully' and return the access token.
                    return res.status(200).send({ 
                        message: 'User logged in successfully',
                        access : auth.createAccessToken(result)
                        })
                } else {
                    // if the email and password is incorrect, send a message 'Incorrect email or password'.
                    return res.status(401).send({ message: 'Incorrect email or password' });
                }
            }
        })
        .catch(error => errorHandler(error, req, res));
    } else{
        // if the email used in not in the right format, send a message 'Invalid email format'.
        return res.status(400).send({ message: 'Invalid email format' });
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

        if(!user){
            // if the user has invalid token, send a message 'invalid signature'.
            return res.status(200).send({ message: 'invalid signature' })
        }else {
            // if the user is found, return the user.
            user.password = "";
            return res.status(200).send(user);
        }  
    })
    .catch(error => errorHandler(error, req, res));
};


module.exports.enroll = (req, res) => {

    console.log(req.user.id);
    console.log(req.body.enrolledCourses) ;

    if(req.user.isAdmin){
        // if the user is an admin, send a message 'Admin is forbidden'.
        return res.status(403).send({ message: 'Admin is forbidden' });
    }

    let newEnrollment = new Enrollment ({
        userId : req.user.id,
        enrolledCourses: req.body.enrolledCourses,
        totalPrice: req.body.totalPrice
    })

    return newEnrollment.save()
    .then(enrolled => {
        // if the user successfully enrolled,return true and send a message 'Enrolled successfully'.
        return res.status(201).send({
            success: true,
            message: 'Enrolled successfully'
        });
    })
    .catch(error => errorHandler(error, req, res));
    
}



module.exports.getEnrollments = (req, res) => {
    return Enrollment.find({userId : req.user.id})
        .then(enrollments => {
            if (enrollments.length > 0) {
                // if there are enrolled courses, return the enrollments.
                return res.status(200).send(enrollments);
            }
            // if there is no enrolled courses, send a message 'No enrolled courses'.
            return res.status(404).send({
                message: 'No enrolled courses'
            });
        })
        .catch(error => errorHandler(error, req, res));
};

module.exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id); // assuming req.user is set by authMiddleware

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Current password is incorrect' });

    user.password = await bcrypt.hashSync(newPassword, 10);

    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (err) {
    errorHandler(err, req, res);
  }
};

module.exports.updateUserInfo = async (req, res) => {
  const { firstName, lastName, mobileNumber } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.mobileNo = mobileNumber || user.mobileNo;

    await user.save();

    res.status(200).json({
      message: 'User information updated successfully',
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        mobileNumber: user.mobileNo,
        email: user.email, // just for reference
      },
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
};

// Admin Update User to Admin Feature
module.exports.promoteToAdmin = (req, res) => {
    const userId = req.body.id;

    // Basic validation
    if (!userId || typeof userId !== 'string') {
        return res.status(400).send({ message: 'Invalid user ID' });
    }

    User.findById(userId)
        .then(userToPromote => {
            if (!userToPromote) {
                return res.status(404).send({ message: 'User not found' });
            }

            if (userToPromote.isAdmin) {
                return res.status(400).send({ message: 'User is already an admin' });
            }

            userToPromote.isAdmin = true;
            return userToPromote.save();
        })
        .then(updatedUser => {
            return res.status(200).send({
                success: true,
                message: 'User successfully promoted to admin',
                user: {
                    id: updatedUser._id,
                    email: updatedUser.email,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    isAdmin: updatedUser.isAdmin
                }
            });
        })
        .catch(error => {
            // Use your existing errorHandler
            const err = new Error(error.message || 'Internal server error');
            err.status = error.status || 500;
            errorHandler(err, req, res);
        });
};

// Update Enrollment Status
module.exports.updateEnrollmentStatus = (req, res) => {
    const { userId, courseId, status } = req.body;

    // Validate required fields
    if (!userId || !courseId || !status) {
        return res.status(400).send({ message: 'userId, courseId, and status are required' });
    }

    // Validate status value
    const validStatuses = ['Enrolled', 'Completed', 'Cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).send({ 
            message: 'Invalid status', 
            validStatuses: validStatuses 
        });
    }

    // Find and update the enrollment
    Enrollment.findOneAndUpdate(
        { 
            userId: userId, 
            'enrolledCourses.courseId': courseId 
        },
        { 
            $set: { 
                'enrolledCourses.$.status': status,
                status: status // Update the main status field as well
            } 
        },
        { new: true }
    )
    .then(updatedEnrollment => {
        if (!updatedEnrollment) {
            return res.status(404).send({ 
                message: 'Enrollment not found for this user and course combination' 
            });
        }
        return res.status(200).send({
            success: true,
            message: 'Enrollment status updated successfully',
            enrollment: updatedEnrollment
        });
    })
    .catch(error => errorHandler(error, req, res));
};
