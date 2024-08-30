// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connecter MongoDB
mongoose.connect('mongodb://localhost:27017/pokemon-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Définir le modèle Pokémon
const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  generation: Number,
  // Ajoute d'autres champs si nécessaire
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// Routes API
app.post('/api/pokemons', async (req, res) => {
  try {
    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.status(201).send(newPokemon);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).send(pokemons);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).send('Pokémon not found');
    }
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.put('/api/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pokemon) {
      return res.status(404).send('Pokémon not found');
    }
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
