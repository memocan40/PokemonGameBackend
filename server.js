const express = require("express");
const app = express();
const port = 3000;

const pokemonRoute = require("./Routes/pokemon");

app.use("/", pokemonRoute);


app.listen (port, () => console.log(`server is running on port ${port}`));