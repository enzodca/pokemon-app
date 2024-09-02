// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const pokemonRoutes = require('./routes/pokemonRoutes');
const Pokemon = require('./models/pokemon');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');

    // Vérifier si les Pokémon sont déjà dans la base de données
    const count = await Pokemon.countDocuments();
    if (count === 0) {
      console.log('Base de données vide, insertion des Pokémon...');
      
      const pokemonsFilePath = path.join(__dirname, 'pokemons.json');
      const data = fs.readFileSync(pokemonsFilePath, 'utf8');
      const pokemons = JSON.parse(data);
      
      await Pokemon.insertMany(pokemons);
      console.log('Données insérées avec succès');
    } else {
      console.log('Les données Pokémon existent déjà, pas de réinsertion nécessaire.');
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api', pokemonRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
