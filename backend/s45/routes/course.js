//[SECTION] Activity: Dependencies and Modules
const express = require("express");
const courseController = require("../controllers/course");

const auth = require("../auth");

const { verify, verifyAdmin } = require("../auth");

//[SECTION] Activity: Routing Component
const router = express.Router();

//[SECTION] Activity: Route for creating a course
router.post("/", verify, verifyAdmin, courseController.addCourse); 

//[SECTION] Activity: Route for retrieving all courses
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

//[SECTION] Activity: Route for retrieving all active courses
router.get("/", courseController.getAllActive);

//[SECTION] Activity: Route for retrieving a specific course
// URL parameter
	// If you want to retrieve data, like getting a course by its ID, you should use the GET method.
	// The route "/specific/:id" is for GET requests and has two parts:
	// /specific/: A fixed part of the route.
	// :id: A placeholder for the unique ID of the resource you want.
	// The :id lets you handle requests for different resources by replacing it with their unique IDs
router.get("/specific/:id", courseController.getCourse);

//[SECTION] Activity: Export Route System
// Allows us to export the "router" object that will be accessed in our "index.js" file
module.exports = router;