//[SECTION] Activity: Dependencies and Modules
const express = require("express");
const workoutController = require("../controllers/workout");
const { verify } = require("../auth");

//[SECTION] Activity: Routing Component
const router = express.Router();

// Add a new workout
router.post('/addWorkout', verify, workoutController.addWorkout);

// Get all workouts for logged-in user
router.get('/getMyWorkouts', verify, workoutController.getMyWorkouts);

// Update a workout
router.patch('/updateWorkout/:workoutId', verify, workoutController.updateWorkout);

// Delete a workout
router.delete('/deleteWorkout/:workoutId', verify, workoutController.deleteWorkout);

// Complete workout status
router.patch('/completeWorkoutStatus/:workoutId', verify, workoutController.completeWorkoutStatus);

//[SECTION] Activity: Export Route System
module.exports = router;