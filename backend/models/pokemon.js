// backend/models/pokemon.js
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  generation: { type: Number, required: true },
  // Add more fields as necessary
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;
