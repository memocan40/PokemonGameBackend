//import mongoose
const mongoose = require("mongoose");

//importing Schemon from mongoose
const Schema = mongoose.Schema;

//create a PokemonSchema

const pokemonSchema = new Schema({
    name:  {
        "english" : String,
        "japanese" : String,
        "chinese" : String,
        "french" : String,    
     },
    
    type: [String,String],
    
    base: {
    
        "HP": Number,
        "Attack": Number,
        "Defense": Number,
        "Sp. Attack": Number,
        "Sp. Defense": Number,
        "Speed": Number
    }
    
    });

//export the model pokemonSchema with the name Pokemon
module.exports = mongoose.model('Pokemon', pokemonSchema);