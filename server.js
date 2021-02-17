const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;


//create the connection string (we need to connect it to our database)
const mongoDB = "mongodb+srv://m001-student:Pilou*963.@sandbox.yfuh3.mongodb.net/Pokemon?retryWrites=true&w=majority";

//initialize the connection 
mongoose.connect(mongoDB, { useNewUrlParser: true });


const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const pokemonRoute = require("./Routes/pokemons.js");

app.use("/", pokemonRoute);


app.listen (port, () => console.log(`server is running on port ${port}`));