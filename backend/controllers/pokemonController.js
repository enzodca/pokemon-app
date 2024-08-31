// backend/controllers/pokemonController.js
const Pokemon = require('../models/pokemon');

const createPokemon = async (req, res) => {
  try {
    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create Pokemon' });
  }
};

const getPokemons = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pokemons = await Pokemon.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pokemons' });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ error: 'Pokemon not found' });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pokemon' });
  }
};

const updatePokemon = async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPokemon) return res.status(404).json({ error: 'Pokemon not found' });
    res.json(updatedPokemon);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update pokemon' });
  }
};

module.exports = {
  createPokemon,
  getPokemons,
  getPokemonById,
  updatePokemon
};
