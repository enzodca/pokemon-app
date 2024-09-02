const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  numero: { 
    type: Number, 
    required: true, 
    unique: true, 
    min: [1, 'Numéro de Pokédex ne peut pas être négatif']
  },
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  type: { 
    type: [String], 
    required: true 
  },
  generation: { 
    type: Number, 
    default: null, 
    min: [1, 'La génération ne peut pas être négative']
  },
  sex: { 
    type: String, 
    enum: ['M', 'F', 'M/F', 'Inconnu'], 
    required: true 
  },
  image: { 
    type: String 
  },
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;
