// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemons')
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon._id}>
            <Link to={`/pokemon/${pokemon._id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-pokemon">Add a new Pokémon</Link>
    </div>
  );
}

export default Home;
