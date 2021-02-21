const express = require("express");
const router = express.Router();

const pokemonControllers = require("../controllers/pokemons");

router.get("/", (_, res) => {
  res.redirect("/pokemons");
});

router.get("/pokemons", pokemonControllers.getAll);
router.get("/pokemons/:id", pokemonControllers.getById);


module.exports = router;
