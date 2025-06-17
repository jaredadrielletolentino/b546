// Importation of the model.
const Task = require("../models/Task.js");

// Controller Function for getting all the tasks
module.exports.getAllTasks = () => {

			// tasks that we found are now stored in result
	return Task.find({}).then(result => {

		return result;

	})

};

module.exports.createTask = (reqBody) => {

	let newTask = new Task({

		name: reqBody.name

	})

	/*return newTask.save().then((task, error) => {

		if(error) {

			console.log(error);
			return false;

		} else {

			return task;

		}

	})*/

	// then/catch is a shorter alternative to traditional callback functions
	return newTask.save().then((task) => task).catch(err => false)
}

module.exports.deleteTask = (taskId) => {

	return Task.findByIdAndDelete(taskId).then((removedTask) => removedTask).catch(err => false)
}

module.exports.updateTask = (taskId, newContent) => {

	return Task.findById(taskId).then((result, error)=>{

		if(error) {
			console.log(err);
			return false;
		}
		// the task's name from the db
		// from the req.body or newContent
		result.name = newContent.name;

		return result.save().then((updateTask, saveErr) =>{

			if(saveErr) {
				console.log(saveErr);
				return false
			} else {
				return updateTask;
			}
		})
	})
}