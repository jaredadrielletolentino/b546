//[SECTION] Activity: Dependencies and Modules
const Workout = require("../models/Workout");
const { errorHandler } = require('../auth');

//[SECTION] Activity: Controller Functions

// Add a new workout
module.exports.addWorkout = (req, res) => {
    const { name, duration } = req.body;
    const userId = req.user.id;

    let newWorkout = new Workout({
        userId,
        name,
        duration,
        status: 'pending',
        dateAdded: new Date()
    });

    newWorkout.save()
    .then(workout => {
        return res.status(201).json({
            userId: workout.userId,
            name: workout.name,
            duration: workout.duration,
            status: workout.status,
            _id: workout._id,
            dateAdded: workout.dateAdded,
            __v: workout.__v
        });
    })
    .catch(error => errorHandler(error, req, res));
};

// Get all workouts for the logged-in user
module.exports.getMyWorkouts = (req, res) => {
    Workout.find({ userId: req.user.id })
    .then(workouts => {
        if(workouts.length > 0){
            return res.status(200).json({ workouts });
        } else {
            return res.status(200).json({ message: 'No workouts found' });
        }
    })
    .catch(error => errorHandler(error, req, res));
};

// Update a workout
module.exports.updateWorkout = (req, res) => {
    const workoutId = req.params.workoutId;
    const { name, duration } = req.body;

    Workout.findByIdAndUpdate(workoutId, {
        name,
        duration
    }, { new: true })
    .then(updatedWorkout => {
        if(!updatedWorkout){
            return res.status(404).json({ message: 'Workout not found' });
        }
        return res.status(200).json({
            message: 'workout updated successfully',
            updatedWorkout: {
                _id: updatedWorkout._id,
                userId: updatedWorkout.userId,
                name: updatedWorkout.name,
                duration: updatedWorkout.duration,
                status: updatedWorkout.status,
                dateAdded: updatedWorkout.dateAdded,
                __v: updatedWorkout.__v
            }
        });
    })
    .catch(error => errorHandler(error, req, res));
};

// Delete a workout
module.exports.deleteWorkout = (req, res) => {
    const workoutId = req.params.workoutId;

    Workout.findByIdAndDelete(workoutId)
    .then(deletedWorkout => {
        if(!deletedWorkout){
            return res.status(404).json({ message: 'Workout not found' });
        }
        return res.status(200).json({ 
            message: 'Workout deleted successfully' 
        });
    })
    .catch(error => errorHandler(error, req, res));
};

// Complete workout status
module.exports.completeWorkoutStatus = (req, res) => {
    const workoutId = req.params.workoutId;

    Workout.findByIdAndUpdate(workoutId, {
        status: 'completed'
    }, { new: true })
    .then(updatedWorkout => {
        if(!updatedWorkout){
            return res.status(404).json({ message: 'Workout not found' });
        }
        return res.status(200).json({
            message: 'workout status updated successfully',
            updatedWorkout: {
                _id: updatedWorkout._id,
                userId: updatedWorkout.userId,
                name: updatedWorkout.name,
                duration: updatedWorkout.duration,
                status: updatedWorkout.status,
                dateAdded: updatedWorkout.dateAdded,
                __v: updatedWorkout.__v
            }
        });
    })
    .catch(error => errorHandler(error, req, res));
};