// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
    
// [SECTION] Environment Setup
// const port = 4000;
require('dotenv').config();

// [SECTION] Server Setup
// Creates an "app" variable that stores the result of the "express" function that initializes our express application and allows us access to different methods that will make backend creation easy
const app = express();

app.use(express.json());

//You can also customize the CORS options to meet your specific requirements.
const corsOptions = {
    //to update the origin of the request
    origin: ['http://localhost:8000'], // Allow requests from this origin (The client's URL) the origin is in array form if there are multiple origins.
    //methods: ['GET', 'POST'], // Allow only specified HTTP methods // optional only if you want to restrict the methods
    //allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers // optional only if you want to restrict the headers
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
    optionsSuccessStatus: 200 // Provides a status code to use for successful OPTIONS requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.
};

app.use(cors(corsOptions));
// Using app.use(cors()) is not a best practice because it allows all other applications to access  our backend app.
// CORS configuration is a common practice in Node.js applications. It helps organize your code and makes it easier to manage and update your CORS settings.

// mongoose.connect("mongodb+srv://admin123:admin123@b546.fojehdr.mongodb.net/taskDB?retryWrites=true&w=majority&appName=b546");

// [SECTION] Database Connection
mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// [SECTION] Server Gateway Response
// if(require.main) would allow us to listen to the app directly if it is not imported to another module, it will run the app directly.
// else, if it is needed to be imported, it will not run the app and instead export it to be used in another file.
if(require.main === module){
    app.listen( process.env.PORT || 3000, () => {
        console.log(`API is now online on port ${process.env.PORT || 3000}`)
    });
}

// In creating APIs, exporting modules in the "index.js" file is ommited
// exports an object containing the value of the "app" variable only used for grading.
module.exports = { app, mongoose };