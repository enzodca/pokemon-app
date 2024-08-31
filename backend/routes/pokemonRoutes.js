// backend/routes/pokemonRoutes.js
const express = require('express');
const { createPokemon, getPokemons, getPokemonById, updatePokemon } = require('../controllers/pokemonController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is working');
  });

  
router.post('/pokemons', createPokemon);
router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonById);
router.put('/pokemons/:id', updatePokemon);

module.exports = router;
