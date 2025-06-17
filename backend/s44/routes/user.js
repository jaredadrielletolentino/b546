//[SECTION] Dependencies and Modules
const express = require('express');
const userController = require('../controllers/user');
const {verify} = require('../auth.js');

//[SECTION] Routing Component
const router = express.Router();

//[SECTION] Route for User Registration
router.post("/register", (req, res) => {
    userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

//[SECTION] Route for User Login
router.post("/login", (req, res) => {
    userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})

//[SECTION] Activity: Routes for duplicate email
router.post("/check-email", (req, res) => {
    userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController));
});


//[Section] Activity: Route for retrieving user details
router.post("/details", verify, (req,res) => {
    // console.log(req.user.id);
    userController.getProfile(req.user.id).then(resultFromController => res.send(resultFromController));
});

// Route for verify method:
// router.get("/verify", verify);


module.exports = router;


