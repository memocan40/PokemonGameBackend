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
  // --- getById, Variant with 'forEach' -----------------------------------------------
  //   getById: async (req, res) => {
  //     const id = parseInt(req.params.id);
  //     db.forEach((poke) => {
  //       if (poke.id === id) {
  //         pokeFoundById = poke;
  //       }
  //     });
  //     try {
  //       await res.json({
  //         code: 200,
  //         operation: "success",
  //         description: `found pokemon with id ${id}`,
  //         data: pokeFoundById,
  //       });
  //     } catch (e) {
  //       res.status(400).json(`Poke with Id ${id} not found`);
  //     }
  //   },
  //
  // --- getById, Variant with 'map' -----------------------------------------------
  //   getById: async (req, res) => {
  //     const id = parseInt(req.params.id);
  //     db.map((poke, index) => {
  //       if (poke.id === id) {
  //         console.log(`### found poke with id ${id} on index: ${index}`);
  //         pokeFoundById = poke;
  //       }
  //     });
  //     try {
  //       await res.json({
  //         code: 200,
  //         operation: "success",
  //         description: `found pokemon with id ${id}`,
  //         data: pokeFoundById,
  //       });
  //     } catch (e) {
  //       res.status(400).json(`Poke with Id ${id} not found`);
  //     }
  //   },
  //
  //
  // --- /pokemon/:id/:info(name|type|base) -----------------------------------------------
  //
  getByIdByInfo: async (req, res) => {
    // const { name, type, base } = req.param;
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
