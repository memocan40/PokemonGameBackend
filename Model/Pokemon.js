//import mongoose
const mongoose = require("mongoose");

//importing Schemon from mongoose
const Schema = mongoose.Schema;

//create a PokemonSchema

const pokemonSchema = new Schema({
    
    name :Object

     });
    

    
    

//export the model pokemonSchema with the name Pokemon
module.exports = mongoose.model('Pokemon', pokemonSchema);