const Task = require("../models/Task");

module.exports.getAllTasks = (req,res) => {

	return Task.find()
	.then(tasks => res.status(200).send({ tasks }))
	.catch(err => res.status(500).send({ error: "Error in Find", details: err}))

}

module.exports.addTask = (req,res) => {
    
	let newTask = new Task({
		name : req.body.name,
		description : req.body.description
	});

	return newTask.save()
	.then((task) => res.status(201).send({task}))
	.catch(err => res.status(500).send({ error: "Error in Save", details: err}))  
}

module.exports.updateTaskStatus = (req, res) => {

	let updatedTask = {
		status: req.body.status
	}

	return Task.findByIdAndUpdate(req.params.taskId, updatedTask)
	.then((task) => res.status(200).send({ 
    	message: 'Task updated successfully', 
    	updatedTask: task 
    }))
	.catch(err => res.status(500).send({ error: "Error in Saving", details: err}))
}