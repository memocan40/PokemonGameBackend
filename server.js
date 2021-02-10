const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

const pokemonRoute = require("./Routes/pokemons.js");
app.use("/", pokemonRoute);

app.listen(port, () => console.log(`server is running on port ${port}`));
