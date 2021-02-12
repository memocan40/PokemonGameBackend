const db = require("../db.json");
module.exports = {
  getAll: async (_, res) => {
    try {
      await res.json({
        code: 200,
        operation: "success",
        description: "Poke data",
        data: db,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  //
  // --- getById with 'find' -----------------------------------------------
  getById: async (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = db.find((item) => item.id === id);

    try {
      await res.json({
        code: 200,
        operation: "succes",
        description: `Pokemon found with id ${id}`,
        data: pokemon,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  },
  //
  // --- /pokemon/:id/:info(name|type|base) -----------------------------------------------
  //
  getByIdByInfo: async (req, res) => {
    const id = parseInt(req.params.id);
    const poke = db.find((item) => item.id === id);

    let request = req.params;
    console.log(request);

    let data = {};
    if (poke && request.info === "name") {
      data = {
        requestedPokemonInfo: {
          id: poke.id,
          info: poke.name,
        },
      };
    }
    if (poke && request.info === "base") {
      data = {
        requestedPokemonInfo: {
          id: poke.id,
          info: poke.base,
        },
      };
    }
    if (poke && request.info === "type") {
      data = {
        requestedPokemonInfo: {
          id: poke.id,
          info: poke.type,
        },
      };
    }

    try {
      await res.json(data);
    } catch (e) {
      console.log(e);
      res.status(400).json(`Wrong request`);
    }
  },
};
