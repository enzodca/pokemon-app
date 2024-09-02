// frontend/src/Router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import AddPokemon from './pages/AddPokemon';
import EditPokemon from './pages/EditPokemon';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/pokemon/:numero" element={<PokemonDetails />} />
        <Route path="/add-pokemon" element={<AddPokemon />} />
        <Route path="/edit-pokemon/:numero" element={<EditPokemon />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
