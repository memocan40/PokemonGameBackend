const Pokemon = require("../Model/Pokemon");
module.exports = {
  getAll: async (_, res) => {
    try {
      const dbResult = await Pokemon.find({});
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
  },

  getById: async (req, res) => {
    const id = parseInt(req.params.id);

    try {
      const dbResult = await Pokemon.find({id});
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