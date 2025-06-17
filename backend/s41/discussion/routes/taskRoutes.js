// Contain all the endpoint for our app.

const express = require("express");

// Create a Router instance that functions as a middleware and routing system.
const router = express.Router();

const taskController = require("../controllers/taskController.js");

// Route to get all the tasks
router.get("/", (req, res) => {

	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));

})

// Route to create a task
router.post("/", (req, res) => {
// req.body is a single object.
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
})

// Route > Controller
// Parameters or params "DELETE"
router.delete("/:id", (req, res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
})

// Update
router.put("/:id", (req, res) => {
// (taskId "req.params.id", newContent"req.body")
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})

module.exports = router;