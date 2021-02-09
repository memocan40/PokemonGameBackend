const db = require("../db.json")
module.exports = {

getAll: async (_,res) => {
      try {
      await res.json({
        code: 200,
        operation: "success",
        description: "Poke data",
        data: db,
      });
    }
    catch (e){
      console.log(e);
      res.sendStatus(404);
    }
  } ,
getById: async (req, res) => {
    // const poke = db.find((item) => item.name.english === "Ivysaur");
    // res.send(db[req.params.id]);
    const id = parseInt(req.params.id);
    const poke = db.find((item) => item.id === id);
    res.send(poke);
  
  
  }
}