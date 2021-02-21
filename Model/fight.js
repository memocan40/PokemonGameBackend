//import mongoose
const mongoose = require("mongoose");

//importing Schemon from mongoose
const Schema = mongoose.Schema;

//create a PokemonSchema

const fightschema = new Schema({
    
    date: {
        type:Date,
        default: Date.now
    },

    winner: {
        type: mongoose.Types.ObjectId,
        required: true

    } 

// the Id of the winner will be sent from the front end 

   
    });
    
    

//export the model pokemonSchema with the name Pokemon
module.exports = mongoose.model('Fight', fightschema);