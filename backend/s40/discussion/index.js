const express = require('express');

// Require Mongoose
const mongoose = require("mongoose");

const app = express();
const port = 4000;

// [SECTION] MongoDB connection:
mongoose.connect("mongodb+srv://admin123:admin123@b546.fojehdr.mongodb.net/taskDB?retryWrites=true&w=majority&appName=b546");

// Allows to handle errors when the initial connection is established.
let db = mongoose.connection;

// If a connection error occured, output in the console.
db.on("error", console.error.bind(console, "Connection Error!"));

// If the connection is successful, output in the console.
db.once("open", () => console.log("We're connected to the cloud database!"));

// [SECTION] Mongoose Schemas
	// Use Schema() constructor of the mongoose module/package to create a schema object.
	// Schema are used as blueprints that define the data structure of the documents that will be stored in MongoDB.
	// It allows easier validation of data that helps us focus on the Step of our code rather than the technical side of things.

// Blueprint of our tasks documents that will be save on our database.
const taskSchema = new mongoose.Schema({
	// Define the fields with its corresponding data types.
	// for our task, it needs to have a task name and task status.
	name: String,
	status: {
		type: String,
		default: "pending"
	}
});

// [SECTION] Mongoose Models:
	// Models are what allows us to gain access to methods that will allow us to perform CRUD functions on our database with ease.
// First letter of a model should be in capitalize.
const Task = mongoose.model("Task", taskSchema);

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes:
// 1. Route for the creation of our tasks
	// First, we need to check if the name of the tasks is existing in the database, if it is send a message "Duplicate task found.", otherwise save the task to the db.
app.post("/tasks", (req, res) => {
	// console.log("This is /tasks endpoint!");
	// We will check if the tasks that we will be adding is already present or saved in our db.

	// We are going to use the findOne() method
	// Syntax:
		// Model.findOne({criteria});

	// This result to a promise
	Task.findOne({name : req.body.name}).then(result => {
		// console.log(result);
		if(result !== null){
			return res.send("Duplicate task found.")
		} else {
			// Create instance of a new task using the Task model:
			let newTask = new Task({
				name : req.body.name
			});

			// console.log(newTask);

			// save method store the new document in the database. Will return a promise that indicates the save was successful
			newTask.save().then((result, error) => {
				// Error handler
				if(error){
					return console.error(error);
				} else {
					return res.send("New task created!");
				}
			})
		}
	})

})


app.listen(port, () => (console.log(`Server running at port ${port}`)));

module.exports = { app, mongoose };