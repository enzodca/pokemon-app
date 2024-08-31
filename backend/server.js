// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pokemon-db')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api', pokemonRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
