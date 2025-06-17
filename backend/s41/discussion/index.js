// Models -> Contains WHAT objects are needed in our API.
// Controllers -> Contains on HOW our API will perform its intended tasks.
// Routes -> Defines WHEN a particular controller will be used
// Example of Routes: POSTMAN sends a request -> ROUTE (req) -> CONTROLLER (return) -> ROUTE (res) -> POSTMAN receives a response.

// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");
// This allows to use all the routes defined in taskRoutes.js
const taskRoute = require("./routes/taskRoutes.js");

// Server setup
const app = express();
const port = 4000;
app.use(express.json());

// Database connection
// Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://admin123:admin123@b546.fojehdr.mongodb.net/taskDB?retryWrites=true&w=majority&appName=b546");
// Set notifications for connection success or failure
let db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error"));
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// Add the taskroute
app.use("/tasks", taskRoute);

if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = { app, mongoose };