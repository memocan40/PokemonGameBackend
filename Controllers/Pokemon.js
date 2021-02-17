const db = require("../db.json");
const Pokemon = require("../Model/Pokemon");
module.exports = {
  getAll: async (_, res) => {
    try {
      const dbResult = await Pokemon.find({});
      console.log(dbResult);
       res.json({
        code: 200,
        operation: "success",
        description: "Poke data",
        data: dbResult,
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  }
}

  //
  // --- getById with 'find' -----------------------------------------------
  // getById: async (req, res) => {
  //   const id = parseInt(req.params.id);
  //   const pokemon = db.find((item) => item.id === id);

  //   try {
  //     await res.json({
  //       code: 200,
  //       operation: "succes",
  //       description: `Pokemon found with id ${id}`,
  //       data: pokemon,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     res.sendStatus(404);
  //   }
  // },
  
