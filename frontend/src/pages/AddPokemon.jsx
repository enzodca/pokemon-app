// frontend/src/pages/AddPokemon.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPokemon() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    generation: 1,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    console.log('Submitting:', formData); // Debug message

    fetch('http://localhost:5000/api/pokemons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add Pokemon');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data); // Debug message
        alert('Pokemon added successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to add Pokemon');
      });
  };

  return (
    <div>
      <h1>Add a new Pokémon</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Generation:
          <input
            type="number"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Pokémon</button>
      </form>
    </div>
  );
}

export default AddPokemon;
