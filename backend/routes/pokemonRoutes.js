const express = require('express');
const { createPokemon, getPokemons, updatePokemon, deletePokemon, getPokemonByNumber,getTotalPokemons } = require('../controllers/pokemonController');
const router = express.Router();

router.get('/pokemons', getPokemons);
router.get('/totalpokemons', getTotalPokemons);
router.post('/pokemons', createPokemon);
router.get('/pokemons/:numero', getPokemonByNumber); 
router.put('/pokemons/:numero', updatePokemon);
router.delete('/pokemons/:numero', deletePokemon);


module.exports = router;
