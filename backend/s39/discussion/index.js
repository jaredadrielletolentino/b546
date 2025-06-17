// We need to require the express dependency so that we can use express in our application.
// This is used to get the content of the express package to be used by our application.
// It will allow us to use/access the methods and functions from express that will allow us to start/create a server.
const express = require('express');

// Creating an application using express.
// app is our server.
const app = express();

// For our application server to run, we need a port to listen to
const port = 4000;

// configurations that needs to be added for our application to work with our FE applications.
	// "use()" method is a middleware.

// This setup allows our server to handle data from request.
// allows your app to read json data.
app.use(express.json());
// This will allow your application to read data from forms.
// urlencoded() is a method
app.use(express.urlencoded({extended:true}));

// Routes
// Express has methods corresponding to each HTTP method
app.get("/", (request, response) => {
	// console.log(request);

	// res.send or response.send uses the express JS module's method instead to send response back to the client.
	response.send("Hello World!");
})

app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint!");
})

app.post("/hello", (req, res) => {
	// console.log(req.body.firstName);
	// Object Deconstruction
	let {firstName, lastName} = req.body;

	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`)
})

// Mock database
let users = [];

// This route expects to receive a POST request at the URI "/register".
app.post("/register", (req, res) => {
	// We need to verify if the username and password provided is not empty string.
	// Object Deconstruction
	// let {username, password} = req.body;

	if(req.body.username !== "" && req.body.password !== ""){
		users.push(req.body);

		res.send(`User ${req.body.username} successfully registered`);
	} else {
		res.send("Please input BOTH username and password.");
	}
})


// Start of Activity
app.put("/change-password", (req, res) => {
    let message = "";
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).send("Both username and new password are required");
    }

    let userFound = false;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            users[i].password = password;
            userFound = true;
            message = `User ${username}'s password has been updated`;
            break;
        }
    }
    
    if (!userFound) {
        message = "User does not exist";
    }
    
    res.send(message);
});

app.post("/find-user", (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        res.status(400).send("Username is required in the request body");
    }
    
    // 5. Use the find method to search for the user
    const user = users.find(user => user.username === username);
    
    // 6. Return the user's details if found
    if (user) {
        res.json(user);
    } else {
        // 7. Return a not found message if no match is found
        res.status(404).send(`User with username "${username}" not found.`);
    }
});

app.delete("/delete-user", (req, res) => {
    // 10. Check if there are users in the users array
    if (users.length > 0) {
        // 11. Remove the last user from the array
        users.pop();
        res.json(users);
    } else {
        // 12. Return a message if the users array is empty
        res.send("Users collection is empty");
    }
});

// End of Activity
// This prevents the server from starting when the module is imported by other files, allowing for testing and reusability.

if(require.main === module){
	app.listen(port, () => (console.log(`Server running at port ${port}`)));
}

// _________________________________________________________
// In development it's until here
/*
	{
		app : server
	}

	let name = "jared";
	let age = 17;

	let sampleObject = {name};

	{
		name: "jared",
		age: 17
	}
*/
// This is for boodle purpose only
module.exports = {app};