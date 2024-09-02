const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const fs = require('fs');
const path = require('path');

// Chemin vers le fichier JSON contenant les données des Pokémon
const pokemonsFilePath = path.join(__dirname, 'pokemons.json');

const seedDatabase = async () => {
  try {
    // Connexion à MongoDB
    await mongoose.connect('mongodb://localhost:27017/pokedex', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connecté');

    // Lire les données du fichier JSON
    const data = fs.readFileSync(pokemonsFilePath, 'utf8');
    const pokemons = JSON.parse(data);

    // Insérer les données dans la base de données
    await Pokemon.insertMany(pokemons);
    console.log('Données insérées avec succès');

  } catch (error) {
    console.error('Erreur lors de l\'insertion des données:', error);
  } finally {
    // Déconnexion de MongoDB
    mongoose.disconnect();
  }
};

// Exécuter le script
seedDatabase();
