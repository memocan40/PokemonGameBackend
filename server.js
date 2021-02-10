const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// setting up the cors config
app.use(cors());

// import route
const pokemonRoute = require("./Routes/pokemons.js");
app.use("/", pokemonRoute);

app.listen(PORT, () =>
  console.log(`CORS-enabled web server is running on port ${PORT}`)
);
