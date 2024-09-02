const Pokemon = require('../models/pokemon');

// Création d'un Pokémon
const createPokemon = async (req, res) => {
  try {
    const { numero, name } = req.body;

    const existingPokemon = await Pokemon.findOne({ $or: [{ numero }, { name }] });
    if (existingPokemon) {
      return res.status(400).json({ error: 'Un Pokémon avec ce numéro ou ce nom existe déjà.' });
    }

    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: 'Échec de la création du Pokémon' });
  }
};

// Récupération des Pokémons avec tri et pagination
const getPokemons = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'numero', order = 'asc', search = '' } = req.query;
    const searchQuery = search ? { name: new RegExp(search, 'i') } : {};
    const pokemons = await Pokemon.find(searchQuery)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Échec de la récupération des pokémons' });
  }
};

// Récupération d'un Pokémon par son ID
const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ error: 'Pokémon non trouvé' });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Échec de la récupération du Pokémon' });
  }
};

// Mise à jour d'un Pokémon
const updatePokemon = async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.findOneAndUpdate({ numero: req.params.numero }, req.body, { new: true });
    if (!updatedPokemon) return res.status(404).json({ error: 'Pokémon non trouvé' });
    res.json(updatedPokemon);
  } catch (error) {
    res.status(400).json({ error: 'Échec de la mise à jour du Pokémon' });
  }
};

// Suppression d'un Pokémon
const deletePokemon = async (req, res) => {
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ numero: req.params.numero });
    if (!deletedPokemon) return res.status(404).json({ error: 'Pokémon non trouvé' });
    res.json({ message: 'Pokémon supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Échec de la suppression du Pokémon' });
  }
};

// Récupération d'un Pokémon par son numero
const getPokemonByNumber = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ numero: req.params.numero });
    if (!pokemon) return res.status(404).json({ error: 'Pokémon non trouvé' });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: 'Échec de la récupération du Pokémon' });
  }
};

// Récupération de tous les Pokemons
const getTotalPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find().sort({ numero: 1 }); 
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: 'Échec de la récupération des pokémons' });
  }
};

module.exports = {
  createPokemon,
  getPokemons,
  getPokemonById,
  getPokemonByNumber,
  updatePokemon,
  deletePokemon,
  getTotalPokemons
};
