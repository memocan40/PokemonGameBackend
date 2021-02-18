const express = require("express");
const router = express.Router();

const pokemonControllers = require("../Controllers/pokemon");

router.get("/pokemons", pokemonControllers.getAll);
router.get("/pokemons/:id", pokemonControllers.getById);


module.exports = router;
