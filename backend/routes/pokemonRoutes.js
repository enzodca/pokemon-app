const express = require('express');
const { createPokemon, getPokemons, updatePokemon, deletePokemon, getPokemonByNumber } = require('../controllers/pokemonController');
const router = express.Router();

router.get('/pokemons', getPokemons);
router.post('/pokemons', createPokemon);
router.get('/pokemons/:numero', getPokemonByNumber); 
router.put('/pokemons/:numero', updatePokemon);
router.delete('/pokemons/:numero', deletePokemon);


module.exports = router;
