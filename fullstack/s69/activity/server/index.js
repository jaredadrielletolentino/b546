const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin123:admin123@b546.fojehdr.mongodb.net/gameApp?retryWrites=true&w=majority&appName=b546");
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use("/games", gameRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };