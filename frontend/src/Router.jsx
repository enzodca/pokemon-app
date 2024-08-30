// src/Router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import AddPokemon from './pages/AddPokemon';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/add-pokemon" element={<AddPokemon />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
