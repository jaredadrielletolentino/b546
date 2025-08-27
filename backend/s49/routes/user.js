//[SECTION] Dependencies and Modules
const express = require('express');
const userController = require('../controllers/user');

const passport = require('passport');
const { verify, isLoggedIn, verifyAdmin } = require("../auth");

//[SECTION] Routing Component
const router = express.Router();

//[SECTION] Checking if the email already exists
router.post("/check-email", userController.checkEmailExists);

//[SECTION] Route for User Registration
router.post("/register", userController.registerUser);

//[SECTION] Route for User Login
router.post("/login", userController.loginUser);


//[Section] Activity: Route for retrieving user details
router.get("/details", verify, userController.getProfile);

//[SECTION] Route to enroll user to a course
router.post('/enroll', verify, userController.enroll);

//[SECTION] Activity: Route to get the user's enrollements array
router.get('/get-enrollments', verify, userController.getEnrollments);

// [SECTION] Route for the Google Login
router.get('/google', passport.authenticate('google', {
	scope: ['email', 'profile'],
	prompt: "select_account"
}))

// [SECTION] Route for callback URL for Google OAuth authentication
router.get('/google/callback', passport.authenticate('google', {
	failureRedirect: '/users/failed'
}), function (req, res) {
	res.redirect('/users/success')
}

)

// [SECTION] Route for failed google authentication
router.get('/failed', (req, res) => {
	res.send("Failed");
})

// [SECTION] Route for successful OAuth authentication
router.get("/success", isLoggedIn, (req, res) => {
	res.send(`Welcome ${req.user.displayName}`);
})

// [SECTION] Google Logout
router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err) {
			console.log('Error while destroying session', err);
		} else {
			req.logout(() => {
				console.log('You are logged out');

				res.redirect('/');
			})
		}
	})
})

// This route is chatgpt generated
router.put('/change-password', verify, userController.changePassword);

router.put('/update-profile', verify, userController.updateUserInfo);

// This route is deepseek generated, the Admin can Update User to Admin Feature
router.put('/promote-to-admin', verify, verifyAdmin, userController.promoteToAdmin);

// Enrollment Status
router.put('/update-enrollment-status', verify, verifyAdmin, userController.updateEnrollmentStatus);

module.exports = router;


