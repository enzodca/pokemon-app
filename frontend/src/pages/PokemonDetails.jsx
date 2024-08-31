// frontend/src/pages/PokemonDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setFormData(data);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/pokemons/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Pokemon updated successfully');
        navigate('/');
      });
  };

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name} Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Generation:
          <input
            type="number"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Pokémon</button>
      </form>
    </div>
  );
}

export default PokemonDetails;
