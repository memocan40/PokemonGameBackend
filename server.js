const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;



//create the connection string (we need to connect it to our database)
const mongoDB = "mongodb+srv://m001-student:Pilou*963.@sandbox.yfuh3.mongodb.net/Pokemon?retryWrites=true&w=majority";

//initialize the connection 
mongoose.connect(mongoDB, { useNewUrlParser: true });

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const pokemonRoute = require("./Routes/pokemons.js");

// setting up the cors config
app.use(cors());


// import route
const pokemonRoute = require("./routes/pokemons");
app.use("/", pokemonRoute);

app.listen(PORT, () =>
  console.log(`CORS-enabled web server is running on port ${PORT}`)
);
